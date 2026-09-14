'use client'

import { useEffect, useState } from 'react'
import { FilePill } from '@/components/common'
import { Badge, Button, Card, CardContent, CardTitle, Separator, Skeleton, Textarea } from '@/components/ui'
import { ArrowUpRight, Brain, Check, Dot, File, Paperclip, ScanSearch } from 'lucide-react'

export type RecommendedIdea = {
    id: string
    title: string
    points: string[]
}

const recommendedIdeas: RecommendedIdea[] = [
    {
        id: 'smart-fridge',
        title: '1인 가구 및 직장인을 위한 스마트 냉장고 잔여 식재료 기반 실시간 레시피 생성 및 자동 장보기 연동 서비스',
        points: ['유통기한 임박 식재료 우선 소진 알고리즘', '배민 B마트, 쿠팡이츠 퀵커머스 부재료 원클릭 결제 API', '초개인화된 15분 완성 저염·고단백 다이닝'],
    },
    {
        id: 'office-meal',
        title: '오피스 냉장고와 팀 취향 데이터를 연결한 점심 메뉴 큐레이션 및 공동 주문 서비스',
        points: ['팀원 알레르기와 선호도를 반영한 메뉴 추천', '인근 식당 및 배달 서비스 공동 주문 최적화', '주간 식비와 잔반량을 함께 보여주는 대시보드'],
    },
]

export function SidebarPanel({
    onIdeaSelect,
    selectedIdeaId,
    selectedIdeaTitle,
}: {
    onIdeaSelect?: (idea: RecommendedIdea) => void
    selectedIdeaId?: string
    selectedIdeaTitle?: string
}) {
    const [generationStep, setGenerationStep] = useState(0)

    useEffect(() => {
        if (generationStep === 0 || generationStep === 4) {
            return
        }

        const generationDelays = [0, 1000, 1100, 1800]
        const timeout = window.setTimeout(() => {
            setGenerationStep((step) => step + 1)
        }, generationDelays[generationStep])

        return () => window.clearTimeout(timeout)
    }, [generationStep])

    const isGenerating = generationStep > 0 && generationStep < 4

    return (
        <div className="flex h-full min-h-0 w-72 shrink-0 flex-col gap-2 overflow-hidden rounded-lg">
            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden rounded-lg bg-card/50 p-4" aria-busy={isGenerating}>
                {/* 참조 소스 컨텍스트 (파일 첨부가 된 경우) */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <File className="h-4 w-4" />
                            <span className="text-xs font-semibold">참조 소스 컨텍스트</span>
                        </div>
                        {generationStep === 1 ? (
                            <Skeleton className="h-5 w-24" />
                        ) : (
                            <Badge className="border-violet-500/50 bg-violet-900/25 text-[11px] text-violet-500">활성화된 파일 2개</Badge>
                        )}
                    </div>
                    <Separator />
                    <div className="flex flex-wrap items-center gap-1">
                        {generationStep === 1 ? (
                            <>
                                <Skeleton className="h-6 w-36" />
                                <Skeleton className="h-6 w-32" />
                            </>
                        ) : (
                            <>
                                <FilePill type={'PDF'} name={'시장정보 요구사항 인터뷰.pdf'} />
                                <FilePill type={'XLSX'} name={'경쟁사 모니터링 현황.xlsx'} />
                            </>
                        )}
                    </div>
                </div>

                {/* 구조화 포커스 레이어 */}
                {(generationStep === 0 || generationStep >= 2) && (
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                            <ScanSearch className="h-4 w-4" />
                            <span className="text-xs font-semibold">구조화 포커스 레이어</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1">
                            {generationStep === 2 ? (
                                <>
                                    <Skeleton className="h-5 w-24" />
                                    <Skeleton className="h-5 w-28" />
                                    <Skeleton className="h-5 w-20" />
                                    <Skeleton className="h-5 w-24" />
                                </>
                            ) : (
                                <>
                                    <Badge className="border-amber-500/50 bg-amber-900/25 text-[11px] text-amber-500"># 비즈니스 모델</Badge>
                                    <Badge className="border-amber-500/50 bg-amber-900/25 text-[11px] text-amber-500"># 기술 아키텍처</Badge>
                                    <Badge className="border-amber-500/50 bg-amber-900/25 text-[11px] text-amber-500"># UX 여정</Badge>
                                    <Badge className="border-amber-500/50 bg-amber-900/25 text-[11px] text-amber-500"># 수익화 전략</Badge>
                                    <Badge className="border-amber-500/50 bg-amber-900/25 text-[11px] text-amber-500"># 리스크 진단</Badge>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* 핵심 분석 아이디어 */}
                {(generationStep === 0 || generationStep >= 3) && (
                    <div className="flex min-h-0 flex-1 flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <Brain className="h-4 w-4" />
                                <span className="text-xs font-semibold">핵심 분석 아이디어</span>
                            </div>
                            {generationStep === 3 ? (
                                <Skeleton className="h-4 w-16" />
                            ) : (
                                <div className="flex items-center gap-0">
                                    <Dot className="-mr-1 text-emerald-400" />
                                    <span className="text-xs text-emerald-400">분석 완료</span>
                                </div>
                            )}
                        </div>
                        {selectedIdeaTitle && !isGenerating && (
                            <p className="truncate rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-[10px] text-primary">
                                선택된 아이디어: {selectedIdeaTitle}
                            </p>
                        )}
                        {generationStep === 3 ? (
                            <Card className="shrink-0 gap-3 p-3">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-4/5" />
                                <div className="flex flex-col gap-2 pt-1">
                                    <Skeleton className="h-3 w-full" />
                                    <Skeleton className="h-3 w-11/12" />
                                    <Skeleton className="h-3 w-4/5" />
                                </div>
                            </Card>
                        ) : (
                            <div className="scrollbar-hidden min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
                                {recommendedIdeas.map((idea) => {
                                    const isSelected = selectedIdeaId === idea.id

                                    return (
                                        <Card
                                            key={idea.id}
                                            role="button"
                                            tabIndex={0}
                                            aria-pressed={isSelected}
                                            onClick={() => onIdeaSelect?.(idea)}
                                            onKeyDown={(event) => {
                                                if (event.key === 'Enter' || event.key === ' ') {
                                                    event.preventDefault()
                                                    onIdeaSelect?.(idea)
                                                }
                                            }}
                                            className={`cursor-pointer gap-2 border border-border/70 bg-background/20 p-0 transition-all duration-200 ease-in-out hover:border-primary/40 hover:bg-secondary/40 focus-visible:ring-2 focus-visible:ring-ring ${isSelected ? 'border-primary/60 bg-primary/5' : ''}`}
                                        >
                                            <CardTitle className="flex flex-col gap-2 bg-neutral-500/10 p-3 text-xs">
                                                <div className="flex items-center justify-between gap-2">
                                                    <Badge variant="outline" className="bg-neutral-500/20 text-[11px]">
                                                        추천 아이디어
                                                    </Badge>
                                                    {isSelected && (
                                                        <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400">
                                                            <Check className="h-3 w-3" aria-hidden="true" />
                                                            선택됨
                                                        </span>
                                                    )}
                                                </div>
                                                <span>&quot;{idea.title}&quot;</span>
                                            </CardTitle>
                                            <CardContent className="w-full flex-col px-3 pt-0 pb-3">
                                                {idea.points.map((point) => (
                                                    <div key={point} className="-ml-2 flex w-full items-center gap-1 text-xs text-neutral-400">
                                                        <Dot className="min-w-6" />
                                                        <span className="text-xs">{point}</span>
                                                    </div>
                                                ))}
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <Separator />

            <div className="flex w-full shrink-0 flex-col gap-2">
                <div className="flex items-center gap-2 overflow-hidden">
                    <FilePill type={'PDF'} name={'시장정보 요구사항 인터뷰.pdf'} />
                    <FilePill type={'XLSX'} name={'경쟁사 모니터링 현황.xlsx'} />
                </div>
                <Textarea className="h-28 resize-none" placeholder="해결하고 싶은 문제나 떠오른 사업 아이디어를 자유롭게 적어보세요." />
                <div className="flex w-full items-center justify-between">
                    <Button size="icon" variant="outline">
                        <Paperclip />
                    </Button>
                    <Button
                        size="icon"
                        disabled={isGenerating}
                        aria-label={isGenerating ? '분석 생성 중' : '분석 생성'}
                        onClick={() => setGenerationStep(1)}
                        className="border-0 bg-linear-to-br from-[#2044C7] to-[#9C13A0] px-2.5 text-white shadow-sm transition-all hover:brightness-110 active:brightness-95"
                    >
                        <ArrowUpRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}
