'use client'

import { useEffect, useReducer, useRef, useState } from 'react'
import { Badge, Button, Card, Separator, TabsContent, Textarea } from '@/components/ui'
import { FeasibilitySection, GrowthStrategySection, ProblemSection, SidebarPanel, TeamBudgetSection } from '@/components/business-plan'
import {
    BarChart3,
    Check,
    CheckCircle2,
    ChevronRight,
    Clock3,
    FileText,
    Gauge,
    HelpCircle,
    FileCheck2,
    LoaderCircle,
    MessageSquareQuote,
    Network,
    Pencil,
    RotateCcw,
    Save,
    Sparkles,
    Target,
    Trash2,
    Users,
    WandSparkles,
    X,
} from 'lucide-react'

type SectionKey = 'problem' | 'solution' | 'growth' | 'team'
type SectionStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED'
type HistoryItem = { id: string; content: string; savedAt: string }
type Section = {
    key: SectionKey
    code: 'P' | 'S' | 'S' | 'T'
    title: string
    shortTitle: string
    content: string
    status: SectionStatus
    charCount: number
    grade: string
    recommendation: string
    history: HistoryItem[]
}

type State = { sections: Record<SectionKey, Section>; activeKey: SectionKey }
type Action =
    | { type: 'select'; key: SectionKey }
    | { type: 'update'; key: SectionKey; content: string }
    | { type: 'complete'; key: SectionKey }
    | { type: 'rollback'; key: SectionKey; content: string }
    | { type: 'reset'; key: SectionKey }

const initialContent: Record<SectionKey, string> = {
    problem: '1인 가구와 직장인은 퇴근 후 무엇을 먹을지 결정하는 데 시간을 쓰고, 냉장고 속 식재료의 유통기한을 놓쳐 폐기합니다.',
    solution:
        '냉장고 사진·바코드·수기 입력으로 식재료와 유통기한을 구조화하고, 남은 재료를 우선 소진하는 15분 맞춤형 레시피를 실시간 추천합니다. 부족한 필수 식재료는 1시간 퀵커머스 장바구니로 자동 큐레이션 연결하며, 사용자 알레르기·칼로리·보유 조리도구 조건까지 완벽하게 반영합니다.',
    growth: '초기에는 식재료 절감 효과를 핵심 가치로 검증하고, 퀵커머스 제휴 수수료와 프리미엄 구독을 통해 수익성을 확보합니다.',
    team: '대표는 고객 인터뷰와 사업개발을 맡고, AI 엔지니어와 영양사 인력으로 추천 모델의 정확도와 서비스 신뢰도를 강화합니다.',
}

const sectionMeta: Record<SectionKey, Omit<Section, 'content' | 'charCount' | 'history' | 'status'>> = {
    problem: {
        key: 'problem',
        code: 'P',
        title: '문제인식',
        shortTitle: '문제인식',
        grade: 'A',
        recommendation: '고객의 반복되는 불편과 시장의 손실을 구체적인 상황으로 제시하세요.',
    },
    solution: {
        key: 'solution',
        code: 'S',
        title: '솔루션',
        shortTitle: '솔루션',
        grade: 'A+',
        recommendation: '핵심 해결 방식과 기존 대체재 대비 차별화된 실행 증거를 제시하세요.',
    },
    growth: {
        key: 'growth',
        code: 'S',
        title: '성장전략',
        shortTitle: '성장전략',
        grade: 'A',
        recommendation: '초기 검증 지표, 수익화 퍼널, 확장 순서를 연결해 보여주세요.',
    },
    team: {
        key: 'team',
        code: 'T',
        title: '팀빌딩',
        shortTitle: '팀빌딩',
        grade: 'A-',
        recommendation: '핵심 역할과 부족한 역량을 보완할 채용 및 협력 계획을 적어주세요.',
    },
}

function makeSection(key: SectionKey): Section {
    const meta = sectionMeta[key]
    const content = initialContent[key]
    return { ...meta, content, status: 'PENDING', charCount: content.length, history: [] }
}

const initialState: State = {
    activeKey: 'solution',
    sections: { problem: makeSection('problem'), solution: makeSection('solution'), growth: makeSection('growth'), team: makeSection('team') },
}

function reducer(state: State, action: Action): State {
    if (action.type === 'select') return { ...state, activeKey: action.key }
    const current = state.sections[action.key]
    if (action.type === 'update') {
        const content = action.content
        return {
            ...state,
            sections: {
                ...state.sections,
                [action.key]: { ...current, content, charCount: content.length, status: content.trim() ? 'IN_PROGRESS' : 'PENDING' },
            },
        }
    }
    if (action.type === 'complete') {
        return {
            ...state,
            sections: {
                ...state.sections,
                [action.key]: {
                    ...current,
                    status: 'COMPLETED',
                    history: current.content
                        ? [
                              {
                                  id: crypto.randomUUID(),
                                  content: current.content,
                                  savedAt: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
                              },
                              ...current.history,
                          ].slice(0, 6)
                        : current.history,
                },
            },
        }
    }
    if (action.type === 'rollback')
        return {
            ...state,
            sections: { ...state.sections, [action.key]: { ...current, content: action.content, charCount: action.content.length, status: 'IN_PROGRESS' } },
        }
    return { ...state, sections: { ...state.sections, [action.key]: { ...current, content: '', charCount: 0, status: 'PENDING' } } }
}

const sectionOrder: SectionKey[] = ['problem', 'solution', 'growth', 'team']
const statusLabel: Record<SectionStatus, string> = { PENDING: '보완 요망', IN_PROGRESS: '작성 중', COMPLETED: '완료' }
const statusClass: Record<SectionStatus, string> = { PENDING: 'text-amber-400', IN_PROGRESS: 'text-primary', COMPLETED: 'text-emerald-400' }

function SectionStatusIcon({ status }: { status: SectionStatus }) {
    if (status === 'COMPLETED') return <Check className="h-3.5 w-3.5" />
    if (status === 'IN_PROGRESS') return <Pencil className="h-3 w-3" />
    return <span className="text-[10px]">!</span>
}

function Step({ section, active, onClick }: { section: Section; active: boolean; onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex min-w-0 flex-1 items-center gap-2 rounded-lg border p-2 text-left transition-all duration-200 ease-in-out ${active ? 'border-primary/60 bg-primary/10' : 'border-transparent bg-background/20 hover:border-border'}`}
        >
            <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${section.status === 'COMPLETED' ? 'bg-emerald-500/15 text-emerald-400' : active ? 'bg-primary text-primary-foreground' : 'bg-amber-500/15 text-amber-400'}`}
            >
                <SectionStatusIcon status={section.status} />
            </span>
            <span className="min-w-0 flex-1">
                <span className="flex items-center justify-between gap-1">
                    <span className="truncate text-[11px] font-semibold">
                        {section.code}. {section.title}
                    </span>
                    <span className={`shrink-0 text-[9px] ${statusClass[section.status]}`}>{statusLabel[section.status]}</span>
                </span>
                <span className="block truncate text-[10px] text-muted-foreground">
                    {section.charCount}자 · 배점 {section.key === 'problem' ? '20~25%' : section.key === 'team' ? '15~20%' : '25~30%'}
                </span>
            </span>
        </button>
    )
}

function CanvasCard({ section, active, onClick }: { section: Section; active: boolean; onClick: () => void }) {
    return (
        <button type="button" onClick={onClick} className="w-full text-left">
            <Card
                className={`gap-4 border-border/70 p-4 transition-all duration-200 ease-in-out hover:border-primary/50 ${active ? 'border-primary/60 bg-primary/5 shadow-md shadow-primary/5' : 'bg-card/80'}`}
            >
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <span
                            className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${active ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}
                        >
                            {section.code}
                        </span>
                        <span className="text-xs font-semibold">{section.title}</span>
                    </div>
                    <span className={`flex items-center gap-1 text-[10px] ${statusClass[section.status]}`}>
                        <SectionStatusIcon status={section.status} /> {statusLabel[section.status]}
                    </span>
                </div>
                <p className="line-clamp-3 text-[11px] leading-5 text-muted-foreground">{section.content || '아직 작성된 내용이 없습니다.'}</p>
                <div className={`text-[10px] ${statusClass[section.status]}`}>
                    {section.charCount}자 · {section.grade} 등급
                </div>
            </Card>
        </button>
    )
}

function ScoreBar({ label, value, color }: { label: string; value: number; color: string }) {
    return (
        <div>
            <div className="mb-1 flex justify-between text-[10px]">
                <span className="text-muted-foreground">{label}</span>
                <span className="font-semibold">{value}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-background/70">
                <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${value}%` }} />
            </div>
        </div>
    )
}

function HistoryPanel({ section, onRollback, onClose }: { section: Section; onRollback: (content: string) => void; onClose: () => void }) {
    return (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm">
            <Card className="w-full max-w-md gap-4 border-border/70 bg-card p-4 shadow-2xl">
                <div className="flex items-center justify-between">
                    <h3 className="flex items-center gap-2 text-sm font-semibold">
                        <Clock3 className="h-4 w-4 text-primary" /> {section.title} 이전 판본
                    </h3>
                    <Button variant="ghost" size="icon-xs" onClick={onClose} aria-label="판본 닫기">
                        <X className="h-4 w-4" />
                    </Button>
                </div>
                <Separator />
                {section.history.length === 0 ? (
                    <p className="py-6 text-center text-xs text-muted-foreground">저장된 이전 판본이 없습니다.</p>
                ) : (
                    <div className="scrollbar-hidden max-h-64 space-y-2 overflow-y-auto">
                        {section.history.map((item) => (
                            <button
                                type="button"
                                key={item.id}
                                onClick={() => {
                                    onRollback(item.content)
                                    onClose()
                                }}
                                className="w-full rounded-lg border border-border/60 bg-background/40 p-4 text-left hover:border-primary/50"
                            >
                                <span className="text-[10px] text-muted-foreground">
                                    {item.savedAt} · {item.content.length}자
                                </span>
                                <p className="mt-1 line-clamp-1 text-xs leading-5">{item.content}</p>
                            </button>
                        ))}
                    </div>
                )}
            </Card>
        </div>
    )
}

export default function Home() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [selectedIdea, setSelectedIdea] = useState<{ id: string; title: string } | null>(null)
    const [canvasLoading, setCanvasLoading] = useState(false)
    const [saveState, setSaveState] = useState<'DIRTY' | 'SAVING' | 'SAVED'>('SAVED')
    const [historyOpen, setHistoryOpen] = useState(false)
    const [mockLoading, setMockLoading] = useState<string | null>(null)
    const [feedbackLoading, setFeedbackLoading] = useState(false)
    const [feedbackVisible, setFeedbackVisible] = useState(false)
    const [tipsLoading, setTipsLoading] = useState(true)
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const activeSection = state.sections[state.activeKey]
    const activeIndex = sectionOrder.indexOf(state.activeKey)
    const completedCount = sectionOrder.filter((key) => state.sections[key].status === 'COMPLETED').length
    const score = Math.min(98, 82 + completedCount * 4 + (activeSection.charCount >= 150 ? 2 : 0))

    useEffect(() => {
        const textarea = textareaRef.current
        if (!textarea) return
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
    }, [activeSection.content, state.activeKey])

    useEffect(() => {
        if (saveState === 'SAVED') return
        const savingTimer = saveState === 'DIRTY' ? window.setTimeout(() => setSaveState('SAVING'), 700) : undefined
        const savedTimer = window.setTimeout(() => setSaveState('SAVED'), saveState === 'DIRTY' ? 1200 : 800)
        return () => {
            if (savingTimer) window.clearTimeout(savingTimer)
            window.clearTimeout(savedTimer)
        }
    }, [activeSection.content, saveState])

    useEffect(() => {
        const loadingTimer = window.setTimeout(() => setTipsLoading(true), 0)
        const timeout = window.setTimeout(() => setTipsLoading(false), 1200)
        return () => {
            window.clearTimeout(loadingTimer)
            window.clearTimeout(timeout)
        }
    }, [activeSection.content, completedCount])

    useEffect(() => {
        if (!canvasLoading) return
        const timeout = window.setTimeout(() => setCanvasLoading(false), 1200)
        return () => window.clearTimeout(timeout)
    }, [canvasLoading])

    const selectSection = (key: SectionKey) => dispatch({ type: 'select', key })
    const updateContent = (content: string) => {
        dispatch({ type: 'update', key: state.activeKey, content })
        setSaveState('DIRTY')
    }
    const completeAndNext = () => {
        if (saveState === 'SAVING') return
        dispatch({ type: 'complete', key: state.activeKey })
        setSaveState('SAVING')
        const next = sectionOrder[activeIndex + 1]
        if (next) dispatch({ type: 'select', key: next })
    }
    const selectIdea = (idea: { id: string; title: string }) => {
        setSelectedIdea(idea)
        setCanvasLoading(true)
    }
    const runMockAction = (kind: string) => {
        setMockLoading(kind)
        window.setTimeout(() => {
            updateContent(
                kind === 'polish'
                    ? `${activeSection.content} 실행 가능한 MVP와 월별 검증 지표를 추가해 심사 관점의 설득력을 높였습니다.`
                    : kind === 'evidence'
                      ? `${activeSection.content} 초기 사용자 100명 인터뷰와 30일 내 재사용률 40%를 핵심 검증 지표로 설정합니다.`
                      : `${activeSection.content} 기존 밀키트와 단순 레시피 앱 대비 식재료 인식과 즉시 배송 연결을 차별점으로 강화합니다.`
            )
            setMockLoading(null)
        }, 1400)
    }
    const openFeedback = () => {
        if (feedbackLoading) return
        setFeedbackLoading(true)
        window.setTimeout(() => {
            setFeedbackLoading(false)
            setFeedbackVisible(true)
        }, 1000)
    }

    return (
        <div className="flex h-full min-h-0 w-full items-center gap-4 px-4">
            <SidebarPanel onIdeaSelect={selectIdea} selectedIdeaId={selectedIdea?.id} selectedIdeaTitle={selectedIdea?.title} />
            <div className="flex h-full min-w-0 flex-1">
                <TabsContent
                    value="overview"
                    className="relative flex h-full w-full min-w-0 flex-1 flex-col gap-4 overflow-hidden rounded-xl border border-border/60 bg-card bg-[radial-gradient(oklch(1_0_0/0.12)_1.5px,transparent_1.5px)] [background-size:20px_20px] p-4 text-foreground"
                >
                    <header className="relative flex shrink-0 items-center overflow-hidden rounded-xl border border-l-2 border-border/60 border-l-primary/70 bg-card/90 px-4 py-4 shadow-sm">
                        <div className="min-w-0">
                            <p className="mb-1 flex items-center gap-2 text-[10px] font-semibold tracking-wide text-primary">
                                <FileCheck2 className="h-3.5 w-3.5 text-primary/80" />
                                선택한 추천 아이디어 검증 BM
                            </p>
                            <div className="min-w-0">
                                <h1 className="truncate text-[15px] leading-5 font-bold tracking-tight text-foreground">
                                    1인 가구 및 직장인을 위한 스마트 냉장고 잔여 식재료 기반 실시간 레시피 생성 및 자동 장보기 연동 서비스
                                </h1>
                            </div>
                        </div>
                    </header>
                    <div className="flex shrink-0 items-center gap-2 rounded-xl border border-border/50 bg-card/70 p-2 shadow-sm">
                        <div className="flex min-w-0 flex-1 gap-2">
                            {sectionOrder.map((key) => (
                                <Step key={key} section={state.sections[key]} active={state.activeKey === key} onClick={() => selectSection(key)} />
                            ))}
                        </div>
                    </div>
                    <main className="grid min-h-0 flex-1 grid-cols-1 gap-4 overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
                        <section className="scrollbar-hidden min-h-0 overflow-y-auto rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-[11px] font-semibold text-primary">
                                        PSST {String(activeIndex + 1).padStart(2, '0')} · 심사 배점{' '}
                                        {activeSection.key === 'problem' ? '20~25%' : activeSection.key === 'team' ? '15~20%' : '25~30%'}
                                    </p>
                                    <h2 className="mt-1 text-2xl font-bold tracking-tight">
                                        {activeSection.title}{' '}
                                        <span className="text-muted-foreground">
                                            (
                                            {activeSection.code === 'P'
                                                ? 'Problem'
                                                : activeSection.code === 'T'
                                                  ? 'Team'
                                                  : activeSection.title === '성장전략'
                                                    ? 'Growth'
                                                    : 'Solution'}
                                            )
                                        </span>
                                    </h2>
                                </div>
                                <span
                                    className={`flex shrink-0 items-center gap-1 rounded-md border px-2 py-1 text-[10px] ${activeSection.status === 'COMPLETED' ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-400' : 'border-amber-500/25 bg-amber-500/10 text-amber-400'}`}
                                >
                                    <CheckCircle2 className="h-3 w-3" />{' '}
                                    {activeSection.status === 'COMPLETED' ? `평가 등급: ${activeSection.grade} (완료)` : '보완 요망 · 평가 대기'}
                                </span>
                            </div>
                            <Card className="mt-4 gap-4 border-primary/20 bg-primary/5 p-4">
                                <div className="flex items-center justify-between gap-2 text-[10px] text-muted-foreground">
                                    <span className="flex items-center gap-1 font-semibold text-foreground">
                                        <HelpCircle className="h-3.5 w-3.5 text-primary" /> 심사관 핵심 질문
                                    </span>
                                    <span>평가 포인트: {activeSection.recommendation}</span>
                                </div>
                                <p className="text-xs leading-5 font-medium">
                                    이 섹션의 내용이 고객 문제와 실행 전략을 충분히 설명하고 차별화된 근거를 가지고 있는가?
                                </p>
                            </Card>
                            <div className="mt-4 flex items-center justify-between text-[10px] text-muted-foreground">
                                <span className="flex items-center gap-1 font-semibold text-foreground">
                                    <Pencil className="h-3 w-3 text-primary" /> 내용 편집 <span className="text-emerald-400">· 로컬 상태 실시간 반영</span>
                                </span>
                                <span>
                                    {activeSection.charCount}자 / 권장 150~220자{' '}
                                    <button type="button" onClick={() => setHistoryOpen(true)} className="ml-2 text-primary hover:underline">
                                        ◷ 이전 판본
                                    </button>
                                </span>
                            </div>
                            <Textarea
                                ref={textareaRef}
                                value={activeSection.content}
                                onChange={(event) => updateContent(event.target.value)}
                                className="mt-2 min-h-44 resize-none overflow-hidden border-border/70 bg-background/70 p-4 text-xs leading-6 transition-all duration-200 ease-in-out focus-visible:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/30"
                            />
                            <Card className="mt-4 gap-4 border-border/40 bg-secondary/30 p-4">
                                <div className="flex items-center gap-1 text-[11px] font-semibold">
                                    <FileText className="h-3.5 w-3.5 text-primary" /> 작성 및 심사 통과 가이드
                                </div>
                                <p className="text-[11px] leading-5 text-muted-foreground">
                                    {activeSection.recommendation} 현재 글자 수와 상태가 우측 캔버스에 즉시 반영됩니다.
                                </p>
                            </Card>
                            <div className="mt-4 flex flex-wrap items-center gap-2">
                                <Button variant="outline" size="xs" className="text-[10px]" disabled={!!mockLoading} onClick={() => runMockAction('polish')}>
                                    {mockLoading === 'polish' ? <LoaderCircle className="h-3 w-3 animate-spin" /> : <WandSparkles className="h-3 w-3" />} AI
                                    문장 윤문
                                </Button>
                                <Button variant="outline" size="xs" className="text-[10px]" disabled={!!mockLoading} onClick={() => runMockAction('evidence')}>
                                    {mockLoading === 'evidence' ? <LoaderCircle className="h-3 w-3 animate-spin" /> : <BarChart3 className="h-3 w-3" />} 정량적
                                    근거 추천
                                </Button>
                                <Button
                                    variant="outline"
                                    size="xs"
                                    className="text-[10px]"
                                    disabled={!!mockLoading}
                                    onClick={() => runMockAction('competitor')}
                                >
                                    {mockLoading === 'competitor' ? <LoaderCircle className="h-3 w-3 animate-spin" /> : <Target className="h-3 w-3" />} 경쟁사
                                    차별점 보강
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="xs"
                                    className="text-[10px] text-destructive"
                                    onClick={() => {
                                        dispatch({ type: 'reset', key: state.activeKey })
                                        setSaveState('DIRTY')
                                    }}
                                >
                                    <Trash2 className="h-3 w-3" /> 내용 비우기
                                </Button>
                                <span
                                    className={`ml-auto flex items-center gap-1 text-[10px] ${saveState === 'SAVED' ? 'text-emerald-400' : 'text-amber-400'}`}
                                >
                                    {saveState === 'SAVED' ? <Check className="h-3 w-3" /> : <Save className="h-3 w-3" />}{' '}
                                    {saveState === 'SAVED' ? '저장됨' : saveState === 'SAVING' ? '저장 중...' : '입력 대기 중...'}
                                </span>
                                <Button
                                    size="sm"
                                    disabled={saveState === 'SAVING'}
                                    className="h-7 bg-primary px-2.5 text-[10px] text-primary-foreground"
                                    onClick={completeAndNext}
                                >
                                    {saveState === 'SAVING' ? <LoaderCircle className="h-3 w-3 animate-spin" /> : <Check className="h-3 w-3" />}{' '}
                                    {saveState === 'SAVING' ? '저장 중...' : '저장 후 다음 섹션'} <ChevronRight className="h-3 w-3" />
                                </Button>
                            </div>
                        </section>
                        <section className="scrollbar-hidden min-h-0 overflow-y-auto rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm">
                            <div className="flex items-center justify-between gap-4 border-b border-border/50 pb-4">
                                <div>
                                    <h2 className="flex items-center gap-2 text-sm font-bold">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                                            <Network className="h-3.5 w-3.5" />
                                        </span>
                                        PSST 통합 전략 캔버스
                                    </h2>
                                    <p className="mt-1 text-[10px] text-emerald-400">
                                        {canvasLoading ? '선택한 섹션 구조화 중...' : '로컬 상태 실시간 동기화 중'}
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-center gap-2">
                                    <Badge className="border-emerald-500/30 bg-emerald-500/10 px-2 text-[10px] text-emerald-400">
                                        <Gauge className="h-3 w-3" /> 적합도 {score}점 · {score >= 94 ? 'A+' : 'A'}
                                    </Badge>
                                    <Button
                                        size="sm"
                                        disabled={feedbackLoading}
                                        onClick={openFeedback}
                                        className="h-7 bg-primary px-2.5 text-[10px] text-primary-foreground hover:bg-primary/90"
                                    >
                                        {feedbackLoading ? <LoaderCircle className="h-3 w-3 animate-spin" /> : <Sparkles className="h-3 w-3" />}
                                        {feedbackLoading ? '분석 중...' : 'AI 종합 피드백'}
                                    </Button>
                                    <Button variant="ghost" size="icon-xs" aria-label="새로고침">
                                        <RotateCcw className="h-3.5 w-3.5 text-muted-foreground" />
                                    </Button>
                                </div>
                            </div>
                            {feedbackVisible && !feedbackLoading && (
                                <Card className="mt-4 gap-2 border-primary/20 bg-primary/5 p-4">
                                    <p className="flex items-center gap-1 text-[10px] font-semibold text-primary">
                                        <Sparkles className="h-3 w-3" /> AI 종합 피드백
                                    </p>
                                    <p className="text-[11px] leading-5 text-muted-foreground">
                                        현재 {completedCount}/4개 섹션이 완료되었습니다.{' '}
                                        {completedCount >= 3
                                            ? '문제와 해결 방식의 연결이 명확해 사업계획서 전개가 안정적입니다.'
                                            : '각 섹션의 핵심 근거와 실행 지표를 보완하면 심사 설득력이 더 높아집니다.'}
                                    </p>
                                </Card>
                            )}
                            {canvasLoading ? (
                                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {sectionOrder.map((key) => (
                                        <Card key={key} className="gap-4 p-4">
                                            <div className="flex justify-between">
                                                <div className="h-6 w-6 animate-pulse rounded-md bg-muted" />
                                                <div className="h-3 w-12 animate-pulse rounded-md bg-muted" />
                                            </div>
                                            <div className="h-3 w-full animate-pulse rounded-md bg-muted" />
                                            <div className="h-3 w-4/5 animate-pulse rounded-md bg-muted" />
                                            <div className="h-3 w-24 animate-pulse rounded-md bg-muted" />
                                        </Card>
                                    ))}
                                </div>
                            ) : (
                                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {sectionOrder.map((key) => (
                                        <CanvasCard
                                            key={key}
                                            section={state.sections[key]}
                                            active={state.activeKey === key}
                                            onClick={() => selectSection(key)}
                                        />
                                    ))}
                                </div>
                            )}
                            {tipsLoading ? (
                                <Card className="mt-4 gap-4 border-border/50 bg-card/80 p-4" aria-busy="true" aria-live="polite">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="h-4 w-56 animate-pulse rounded-md bg-muted" />
                                        <div className="h-5 w-24 animate-pulse rounded-md bg-muted" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-3 w-full animate-pulse rounded-md bg-muted" />
                                        <div className="h-3 w-11/12 animate-pulse rounded-md bg-muted" />
                                        <div className="h-3 w-4/5 animate-pulse rounded-md bg-muted" />
                                    </div>
                                    <div className="space-y-3 pt-1">
                                        <div className="h-3 w-full animate-pulse rounded-full bg-muted" />
                                        <div className="h-3 w-full animate-pulse rounded-full bg-muted" />
                                    </div>
                                    <div className="h-px w-full bg-muted" />
                                    <div className="flex justify-between">
                                        <div className="h-3 w-44 animate-pulse rounded-md bg-muted" />
                                        <div className="h-6 w-36 animate-pulse rounded-md bg-muted" />
                                    </div>
                                </Card>
                            ) : (
                                <Card className="mt-4 animate-in gap-4 border-amber-500/20 bg-amber-500/5 p-4 duration-500 fade-in">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="flex items-center gap-2 text-xs font-semibold">
                                            <MessageSquareQuote className="h-3.5 w-3.5 text-amber-400" /> TIPS · 초기창업패키지 합격 적합도 분석
                                        </h3>
                                        <Badge
                                            className={`${completedCount >= 3 ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-amber-500/30 bg-amber-500/10 text-amber-400'} text-[10px]`}
                                        >
                                            {completedCount >= 3 ? '서면통과 안정권' : '보완 후 재검토'}
                                        </Badge>
                                    </div>
                                    <p className="text-[11px] leading-5 text-muted-foreground">
                                        작성 완료 섹션 {completedCount}/4개.{' '}
                                        {completedCount >= 3
                                            ? 'PSST 구조의 인과관계와 실행 계획이 안정적으로 연결되어 있습니다.'
                                            : '각 섹션을 작성 완료 처리하면 합격 적합도 분석이 갱신됩니다.'}
                                    </p>
                                    <div className="space-y-2">
                                        <ScoreBar label="논리적 완결성 (PSST)" value={Math.min(96, score)} color="bg-emerald-400" />
                                        <ScoreBar label="시장 규모 및 확장성" value={Math.min(92, score - 2)} color="bg-primary" />
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between gap-2 text-[10px] text-muted-foreground">
                                        <span>
                                            총 글자수 {Object.values(state.sections).reduce((sum, section) => sum + section.charCount, 0)}자 / 표준 공문 3페이지
                                            분량
                                        </span>
                                        <Button variant="outline" size="xs" className="text-[10px]">
                                            <FileText className="h-3 w-3" /> 공식 사업계획서 뷰로 전환하기
                                        </Button>
                                    </div>
                                </Card>
                            )}
                        </section>
                    </main>
                    <footer className="grid shrink-0 grid-cols-1 gap-2 sm:grid-cols-3">
                        <FooterMetric
                            icon={<Target className="h-4 w-4" />}
                            label="고객 문제 연계도"
                            value={`${Math.min(98, 84 + completedCount * 3)}% (직접적 인과)`}
                        />
                        <FooterMetric
                            icon={<Gauge className="h-4 w-4" />}
                            label="정량 지표 포함"
                            value={`${activeSection.charCount >= 150 ? '15분 / 1시간 배송' : '보완 필요'}`}
                        />
                        <FooterMetric
                            icon={<Users className="h-4 w-4" />}
                            label="수익모델 연동"
                            value={`${state.sections.growth.status === 'COMPLETED' ? '장바구니 수수료' : '성장전략 작성 요망'}`}
                        />
                    </footer>
                    {historyOpen && (
                        <HistoryPanel
                            section={activeSection}
                            onRollback={(content) => {
                                dispatch({ type: 'rollback', key: state.activeKey, content })
                                setSaveState('DIRTY')
                            }}
                            onClose={() => setHistoryOpen(false)}
                        />
                    )}
                </TabsContent>
                <TabsContent
                    value="analytics"
                    className="scrollbar-hidden flex h-full w-full min-w-0 flex-1 flex-col items-center justify-start gap-6 overflow-y-auto rounded-xl border border-border/60 bg-card/50 bg-[radial-gradient(oklch(1_0_0/0.12)_1.5px,transparent_1.5px)] [background-size:20px_20px] p-6 text-center"
                >
                    <ProblemSection />
                    <FeasibilitySection />
                    <GrowthStrategySection />
                    <TeamBudgetSection />
                </TabsContent>
            </div>
        </div>
    )
}

function FooterMetric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/70 p-2 shadow-sm">
            <span className="text-emerald-400">{icon}</span>
            <div>
                <p className="text-[10px] text-muted-foreground">{label}</p>
                <p className="text-[11px] font-semibold">{value}</p>
            </div>
        </div>
    )
}
