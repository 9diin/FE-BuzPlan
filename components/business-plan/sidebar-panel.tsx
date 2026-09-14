import { FilePill } from '@/components/common'
import { Badge, Button, Card, CardContent, CardTitle, Separator, Textarea } from '@/components/ui'
import { ArrowUpRight, Brain, Dot, File, Paperclip, ScanSearch } from 'lucide-react'

export function SidebarPanel() {
    return (
        <div className="flex h-full w-72 flex-col gap-2 rounded-lg">
            <div className="flex h-[calc(100%-192px)] w-full flex-col gap-8 rounded-lg bg-card/50 p-2">
                {/* 참조 소스 컨텍스트 (파일 첨부가 된 경우) */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <File className="h-4 w-4" />
                            <span className="text-xs font-semibold">참조 소스 컨텍스트</span>
                        </div>
                        <Badge className="border-violet-500/50 bg-violet-900/25 text-[11px] text-violet-500">활성화된 파일 2개</Badge>
                    </div>
                    <Separator />
                    <div className="flex flex-wrap items-center gap-1">
                        <FilePill type={'PDF'} name={'시장정보 요구사항 인터뷰.pdf'} />
                        <FilePill type={'XLSX'} name={'경쟁사 모니터링 현황.xlsx'} />
                    </div>
                </div>

                {/* 구조화 포커스 레이어 */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <ScanSearch className="h-4 w-4" />
                        <span className="text-xs font-semibold">구조화 포커스 레이어</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1">
                        <Badge className="border-amber-500/50 bg-amber-900/25 text-[11px] text-amber-500"># 비즈니스 모델</Badge>
                        <Badge className="border-amber-500/50 bg-amber-900/25 text-[11px] text-amber-500"># 기술 아키텍처</Badge>
                        <Badge className="border-amber-500/50 bg-amber-900/25 text-[11px] text-amber-500"># UX 여정</Badge>
                        <Badge className="border-amber-500/50 bg-amber-900/25 text-[11px] text-amber-500"># 수익화 전략</Badge>
                        <Badge className="border-amber-500/50 bg-amber-900/25 text-[11px] text-amber-500"># 리스크 진단</Badge>
                    </div>
                </div>

                {/* 핵심 분석 아이디어 */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <Brain className="h-4 w-4" />
                            <span className="text-xs font-semibold">핵심 분석 아이디어</span>
                        </div>
                        <div className="flex items-center gap-0">
                            <Dot className="-mr-1 text-emerald-400" />
                            <span className="text-xs text-emerald-400">분석 완료</span>
                        </div>
                    </div>
                    <Card className="gap-2 p-0">
                        <CardTitle className="flex flex-col gap-2 bg-neutral-500/10 p-3 text-xs">
                            <Badge variant="outline" className="bg-neutral-500/20 text-[11px]">
                                추천 아이디어
                            </Badge>
                            <span>"1인 가구 및 직장인을 위한 스마트 냉장고 잔여 식재료 기반 실시간 레시피 생성 및 자동 장보기 연동 서비스"</span>
                        </CardTitle>
                        <CardContent className="w-full flex-col px-3 pb-2">
                            <div className="-ml-2 flex w-full items-center gap-1 text-xs text-neutral-400">
                                <Dot className="min-w-6" />
                                <span className="text-xs">유통기한 임박 식재료 우선 소진 알고리즘</span>
                            </div>
                            <div className="-ml-2 flex w-full items-center gap-1 text-xs text-neutral-400">
                                <Dot className="min-w-6" />
                                <span className="text-xs">배민 B마트, 쿠팡이츠 퀵커머스 부재료 원클릭 결제 API</span>
                            </div>
                            <div className="-ml-2 flex w-full items-center gap-1 text-xs text-neutral-400">
                                <Dot className="min-w-6" />
                                <span className="text-xs">초개인화된 15분 완성 저염&middot;고단백 다이닝</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Separator />

            <div className="flex w-full flex-col gap-2">
                <div className="flex items-center gap-2 overflow-x-scroll">
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
                        className="border-0 bg-linear-to-br from-[#2044C7] to-[#9C13A0] px-2.5 text-white shadow-sm transition-all hover:brightness-110 active:brightness-95"
                    >
                        <ArrowUpRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}
