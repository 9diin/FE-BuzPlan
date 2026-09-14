import { FilePill, GrowthRoadmapChart } from '@/components/common'
import { Badge, Button, Card, CardContent, CardTitle, Separator, TabsContent, Textarea } from '@/components/ui'
import { ArrowBigDownDash, ArrowUpRight, Brain, Dot, File, Lightbulb, Paperclip, ScanSearch, Square } from 'lucide-react'

export default function Home() {
    return (
        <div className="flex h-full w-full items-center gap-4">
            {/* 좌측 사이드바 패널 */}
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

            {/* 우측 메인 콘텐츠 영역 (탭 콘텐츠) */}
            <div className="flex h-full flex-1">
                {/* 1. 아이디어 구조화 탭 (도트 캔버스 배경) */}
                <TabsContent
                    value="overview"
                    className="relative flex h-full w-full flex-1 flex-col items-center justify-center rounded-lg border border-border/50 bg-card bg-[radial-gradient(oklch(1_0_0/0.12)_1.5px,transparent_1.5px)] [background-size:20px_20px] p-6 text-center"
                >
                    {/* 아이디어 노드가 없을 경우 - NO DATA */}
                    <div className="flex flex-col items-center gap-3 text-muted-foreground">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/50 text-primary">
                            <Lightbulb size={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base font-medium text-foreground">아이디어 구조화 캔버스</h3>
                            <p className="text-xs text-muted-foreground">좌측 패널에서 아이디어를 입력하거나 파일을 첨부하여 구조화를 시작하세요.</p>
                        </div>
                    </div>
                </TabsContent>

                {/* 2. 사업계획서 도출 탭 */}
                <TabsContent
                    value="analytics"
                    className="flex w-full flex-1 flex-col items-center justify-start gap-6 overflow-y-scroll rounded-lg border border-border/50 bg-card/50 p-6 text-center"
                >
                    {/* <div className="flex flex-col items-center gap-3 text-muted-foreground">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/50 text-primary">
                            <FileText size={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base font-medium text-foreground">사업계획서 도출</h3>
                            <p className="text-xs text-muted-foreground">구조화된 아이디어를 바탕으로 사업계획서 문서를 자동으로 생성합니다.</p>
                        </div>
                    </div> */}
                    {/* 문제 인식 */}
                    <div className="flex h-280.75 w-198.5 flex-col rounded-lg bg-white p-6 text-[11px] text-black">
                        <section className="flex items-center justify-between border-b border-black pb-2">
                            <div className="flex items-center gap-2">
                                <Badge className="rounded-xs text-[10px]">[별지 제1호 서식]</Badge>
                                <span>2026년도 창업성장기술개발사업(TIPS / 초기창업패키지) 사업계획서</span>
                            </div>
                            <div>
                                <span>과제접수번호 : </span>
                                <span>2026-TIPS-IDEA-0908</span>
                            </div>
                        </section>
                        <section className="flex flex-col gap-6 py-6">
                            <div className="my-6 flex flex-col gap-2">
                                <h1 className="text-4xl font-bold tracking-widest">사 업 계 획 서</h1>
                                <span>[민관협력 창업성장기술개발 (TIPS R&D 연계) / 초기창업패키지 공통서식]</span>
                            </div>
                            <div className="flex w-full flex-col">
                                <div className="flex h-9 w-full items-center">
                                    <div className="flex h-full w-1/5 min-w-1/5 items-center justify-center bg-blue-500/15 font-semibold">신청 과제명</div>
                                    <div className="flex h-full w-4/5 min-w-4/5 items-center justify-center bg-blue-50 pl-3">
                                        스마트 제로-웨이스트 다이닝 OS : 잔여 식재료 비전 인지 기반 인스턴트 밀키트화 플랫폼
                                    </div>
                                </div>
                                <div className="flex h-9 w-full items-center">
                                    <div className="flex h-full w-1/2 min-w-1/2 items-center border">
                                        <div className="flex h-full w-2/5 min-w-2/5 items-center justify-center bg-blue-500/15 font-semibold">기술 분야</div>
                                        <div className="flex h-full w-3/5 min-w-3/5 items-center justify-center border-b border-neutral-100 text-center break-keep">
                                            푸드테크 / 온디바이스 비전 AI
                                        </div>
                                    </div>
                                    <div className="flex h-full w-1/2 min-w-1/2 items-center border">
                                        <div className="flex h-full w-2/5 min-w-2/5 items-center justify-center bg-blue-500/15 font-semibold">과제 구분</div>
                                        <div className="flex h-full w-3/5 min-w-3/5 items-center justify-center border-b border-neutral-100 text-center break-keep">
                                            상용화 R&D (민관공동투자형)
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-9 w-full items-center">
                                    <div className="flex h-full w-1/2 min-w-1/2 items-center border">
                                        <div className="flex h-full w-2/5 min-w-2/5 items-center justify-center bg-blue-500/15 font-semibold">
                                            주관연구개발기관
                                        </div>
                                        <div className="flex h-full w-3/5 min-w-3/5 items-center justify-center border-b border-neutral-100 text-center break-keep">
                                            (주) 준코딩 스튜디오
                                        </div>
                                    </div>
                                    <div className="flex h-full w-1/2 min-w-1/2 items-center border">
                                        <div className="flex h-full w-2/5 min-w-2/5 items-center justify-center bg-blue-500/15 font-semibold">
                                            대표자 (책임자)
                                        </div>
                                        <div className="flex h-full w-3/5 min-w-3/5 items-center justify-center border-b border-neutral-100 text-center break-keep">
                                            박 아무개 (꿈만장자)
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-9 w-full items-center">
                                    <div className="flex h-full w-1/2 min-w-1/2 items-center border">
                                        <div className="flex h-full w-2/5 min-w-2/5 items-center justify-center bg-blue-500/15 font-semibold">
                                            총 연구개발기간
                                        </div>
                                        <div className="flex h-full w-3/5 min-w-3/5 items-center justify-center border-b border-neutral-100 text-center break-keep">
                                            2026. 09. 01 ~ 2026. 09. 08 <br /> (2년 3개월)
                                        </div>
                                    </div>
                                    <div className="flex h-full w-1/2 min-w-1/2 items-center border">
                                        <div className="flex h-full w-2/5 min-w-2/5 items-center justify-center bg-blue-500/15 font-semibold">총 사업비</div>
                                        <div className="flex h-full w-3/5 min-w-3/5 items-center justify-center border-b border-neutral-100 text-center break-keep">
                                            650,000,000원 <br />
                                            (정부 1.5억 + 민간 3.5억)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col gap-6 py-6">
                            <div className="flex items-center justify-between border-b border-black pb-2">
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="w-5! rounded-xs font-semibold">
                                        1
                                    </Badge>
                                    <span className="text-base font-semibold">1. 문제인식 (Problem) - 창업아이템의 배경 및 개발 필요성</span>
                                </div>
                                <Badge className="rounded-xs text-[10px]">[평가배점 : 25점]</Badge>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-sm font-medium">가. 1인 가구 식생활 실태 및 3대 핵심 페인포인트 (Pain Points)</span>
                                <p className="text-justify indent-2">
                                    통계청 인구총조사(2026년 기준)에 따르면 국내 1인 가구는 800만 가구(전체 가구의 34.5%)에 달하며, 이들의 월평균 식비 중 미사용
                                    부패 폐기로 인한 직접 손실액이 가구당 연간 58.4만 원에 이르고 있음. 마트의 대용량 묶음 포장 유통 구조와 퇴근 후 조리 마찰
                                    비용이 결합하여 심각한 자원 낭비와 배달 외식 고비용 고착화를 야기하고 있음.
                                </p>
                                <div className="mt-2 flex w-full flex-col items-center gap-3 rounded-sm border border-neutral-500 p-3">
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-1 text-sm">
                                            <Square fill="#000000" className="h-3 w-3" />
                                            <span className="font-medium">[도 1-1] 1인 가구 식자재 낭비 및 외식 의존의 악순환 구조도</span>
                                        </div>
                                        <Badge className="rounded-xs text-[10px] font-medium">국내 연간 식자재 폐기 손실: 약 15.4조 원</Badge>
                                    </div>
                                    <Separator className="bg-neutral-500" />
                                    <div className="grid grid-cols-4 gap-3">
                                        <Card className="gap-2 rounded-sm bg-neutral-50 p-2 text-black">
                                            <div className="flex items-center justify-center rounded-xs bg-blue-50 py-1 text-xs font-medium text-black">
                                                단계 ➀ - 구매
                                            </div>
                                            <div className="my-1 flex flex-col gap-1">
                                                <span className="font-medium">대용량 번들 강제 구매</span>
                                                <p className="text-justify text-[11px] text-neutral-700">
                                                    마트 소포장 부재로 묶음 채소&middot;대용량 조미료 비자발적 과대 구매
                                                </p>
                                            </div>
                                            <Separator className="bg-neutral-300" />
                                            <span className="text-xs font-medium text-neutral-700">초과 비축 발생</span>
                                        </Card>
                                        <Card className="gap-2 rounded-sm bg-neutral-50 p-2 text-black">
                                            <div className="flex items-center justify-center rounded-xs bg-blue-50 py-1 text-xs font-medium text-black">
                                                단계 ➁ - 구매
                                            </div>
                                            <div className="my-1 flex flex-col gap-1">
                                                <span className="font-medium">냉장고 방치 및 망각</span>
                                                <p className="text-justify text-[11px] text-neutral-700">
                                                    보유 재고 망각 및 레시피 탐색 피로도 가중 (탐색 평균 68분 소요)
                                                </p>
                                            </div>
                                            <Separator className="bg-neutral-300" />
                                            <span className="text-xs font-medium text-neutral-700">평균 방치 11.4일</span>
                                        </Card>
                                        <Card className="gap-2 rounded-sm bg-neutral-50 p-2 text-black">
                                            <div className="flex items-center justify-center rounded-xs bg-blue-50 py-1 text-xs font-medium text-black">
                                                단계 ③ - 폐기
                                            </div>
                                            <div className="my-1 flex flex-col gap-1">
                                                <span className="font-medium">부패 및 음식물 폐기</span>
                                                <p className="text-justify text-[11px] text-neutral-700">
                                                    구매 식자재의 43%가 미사용 부패 폐기되며 종량제 부담 초래
                                                </p>
                                            </div>
                                            <Separator className="bg-neutral-300" />
                                            <span className="text-xs font-medium text-neutral-700">가구당 월 4.8만 원 손실</span>
                                        </Card>
                                        <Card className="gap-2 rounded-sm bg-neutral-50 p-2 text-black">
                                            <div className="flex items-center justify-center rounded-xs bg-blue-50 py-1 text-xs font-medium text-black">
                                                단계 ④ - 의존
                                            </div>
                                            <div className="my-1 flex flex-col gap-1">
                                                <span className="font-medium">배달앱 고비용 의존</span>
                                                <p className="text-justify text-[11px] text-neutral-700">
                                                    조리 포기 후 1끼당 1.8~2.5만 원 고비용 배달 음식 악순환 반복
                                                </p>
                                            </div>
                                            <Separator className="bg-neutral-300" />
                                            <span className="text-xs font-medium text-neutral-700">다시 단계 ➀ 회귀</span>
                                        </Card>
                                    </div>
                                    <ArrowBigDownDash fill="#d4d4d4" className="-my-1.5 text-neutral-300" />
                                    <div className="flex w-full items-center gap-2 rounded-sm bg-neutral-50 p-2">
                                        <Badge className="rounded-xs text-[10px] font-medium">&#8251; 본 과제의 핵심 해결 메커니즘</Badge>
                                        <p className="font-semibold whitespace-nowrap">
                                            스마트폰 단 1초 인식 &#8594; 결손 부재료만 초소량 보충하여 악순환(단계 ➁ &#8594; ③) 근원적 차단 (
                                            <span className="rounded-xs bg-amber-300/50 font-bold text-black">낭비 감축효율 78.4%</span>)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-sm font-medium">나. 기존 대체재와의 기술적&middot;경제적 비교 분석표</span>
                                <div className="flex w-full flex-col gap-0.5">
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-500/15 p-2.5 font-semibold">비교 항목</div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                            시판 기성 밀키트
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-500/15 p-2.5 font-semibold">배달 전문 음식</div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-500/15 p-2.5 font-semibold">본 개발 솔루션</div>
                                    </div>
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-semibold">잔여 식자재 소진율</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">소진 불가 (고정 번들)</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">소진 불가 (완제품 배달)</div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-medium">
                                            100% 잔여재료 우선 소진
                                        </div>
                                    </div>
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-semibold">1식 평균 소요비용</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">14,000 ~ 18,000원</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">18,000 ~ 25,000원 (배달 팁)</div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-medium">
                                            3,500 ~ 5,500원 (결손 조미료만)
                                        </div>
                                    </div>
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-semibold">소비 리드타임</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">익일 새벽배송 대기</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">주문 후 45 ~ 60분 소요</div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-medium">
                                            퀵커머스 20분 내 수령&middot;15분 완성
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* 해결 전략 */}
                    <div className="flex h-280.75 w-198.5 flex-col rounded-lg bg-white p-6 text-[11px] text-black">
                        <section className="flex items-center justify-between border-b border-black pb-2">
                            <div className="flex items-center gap-2">
                                <Badge className="rounded-xs text-[10px]">[별지 제1호 서식]</Badge>
                                <span>2026년도 창업성장기술개발사업(TIPS / 초기창업패키지) 사업계획서</span>
                            </div>
                            <div>
                                <span>과제접수번호 : </span>
                                <span>2026-TIPS-IDEA-0908</span>
                            </div>
                        </section>
                        <section className="flex flex-col gap-6 py-6">
                            <div className="flex items-center justify-between border-b border-black pb-2">
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="w-5! rounded-xs font-semibold">
                                        2
                                    </Badge>
                                    <span className="text-base font-semibold">2. 실현 가능성 (Solution) - 온디바이스 Vision AI 및 결손 벌들 솔루션</span>
                                </div>
                                <Badge className="rounded-xs text-[10px]">기술성 및 사업화 타당성 A등급</Badge>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-sm font-medium">가. 핵심 기술 아키텍쳐 및 4단계 서비스 엔지니어링 파이프라인</span>
                                <p className="text-justify indent-2">
                                    본 기술은 스마트폰 NPU 상에서 독립 구동되는 경량 객체인식 모델(YOLOv8s INT8)을 통해 사용자 냉장고 스냅샷 1장으로부터 840여
                                    종 식자재 및 신선도를 1.2초 내로 식별합니다. 이후 pgvector 시맨틱 임베딩 기반 영양학 지식그래프를 활용하여 잔존 소비기한 순
                                    최적 15분 레시피를 도출하고, 결손 필수 부재료만을 퀵커머스 배송망(B마트/요마트)으로 원터치 발주 시킵니다.
                                </p>
                                <div className="mt-2 flex w-full flex-col items-center gap-3 rounded-sm border border-neutral-500 p-3">
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-1 text-sm">
                                            <Square fill="#000000" className="h-3 w-3" />
                                            <span className="font-medium">[도 2-1] 온디바이스 비전 AI 및 결손 조미료 매칭 4-Step 엔지니어링 파이프라인</span>
                                        </div>
                                        <Badge className="rounded-xs text-[10px] font-medium">End-to-End Latency: 1.2초 이내</Badge>
                                    </div>
                                    <Separator className="bg-neutral-500" />
                                    <div className="grid grid-cols-4 gap-3">
                                        <Card className="gap-2 rounded-sm bg-neutral-50 p-2 text-black">
                                            <div className="flex w-full items-center justify-between">
                                                <Badge className="rounded-xs bg-violet-500 text-[10px] font-medium text-white">PHASE 1</Badge>
                                                <span className="text-[10px]">1단계</span>
                                            </div>
                                            <div className="my-1 flex flex-col items-start gap-1">
                                                <span className="font-medium">1초 냉장고 스냅샷</span>
                                                <p className="text-justify text-[11px] text-neutral-700">
                                                    모바일 카메라 단일 샷 촬영 자동 노이즈/조도 보정 필터 구동
                                                </p>
                                            </div>
                                            <div className="flex w-full flex-col items-start gap-1 rounded-sm border border-neutral-200/75 bg-white p-2 text-[10px]">
                                                <div className="flex w-full items-center justify-between">
                                                    <span>지연시간</span>
                                                    <span className="font-medium">250ms</span>
                                                </div>
                                                <span>RGB-D 엣지 정제</span>
                                            </div>
                                        </Card>
                                        <Card className="gap-2 rounded-sm bg-neutral-50 p-2 text-black">
                                            <div className="flex w-full items-center justify-between">
                                                <Badge className="rounded-xs bg-violet-500 text-[10px] font-medium text-white">PHASE 2</Badge>
                                                <span className="text-[10px]">2단계</span>
                                            </div>
                                            <div className="my-1 flex flex-col items-start gap-1">
                                                <span className="font-medium">식재료&middot;신선도 추론</span>
                                                <p className="text-justify text-[11px] text-neutral-700">
                                                    YOLOv8s INT8 모듈로 840종 식자재 및 소비기한 위험도 연산
                                                </p>
                                            </div>
                                            <div className="flex w-full flex-col items-start gap-1 rounded-sm border border-neutral-200/75 bg-white p-2 text-[10px]">
                                                <div className="flex w-full items-center justify-between">
                                                    <span>mAP 정확도</span>
                                                    <span className="font-medium">89.2%</span>
                                                </div>
                                                <span>온디바이스 NPU 구동</span>
                                            </div>
                                        </Card>
                                        <Card className="gap-2 rounded-sm bg-neutral-50 p-2 text-black">
                                            <div className="flex w-full items-center justify-between">
                                                <Badge className="rounded-xs bg-violet-500 text-[10px] font-medium text-white">PHASE 3</Badge>
                                                <span className="text-[10px]">3단계</span>
                                            </div>
                                            <div className="my-1 flex flex-col items-start gap-1">
                                                <span className="font-medium">시맨틱 RAG 레시피</span>
                                                <p className="text-justify text-[11px] text-neutral-700">
                                                    pgvector 지식 그래프로 폐기 임박재료 중심 15분 레시피 매칭
                                                </p>
                                            </div>
                                            <div className="flex w-full flex-col items-start gap-1 rounded-sm border border-neutral-200/75 bg-white p-2 text-[10px]">
                                                <div className="flex w-full items-center justify-between">
                                                    <span>레시피 DB</span>
                                                    <span className="font-medium">12만 건</span>
                                                </div>
                                                <span>결손 추론 15ms</span>
                                            </div>
                                        </Card>
                                        <Card className="gap-2 rounded-sm bg-neutral-50 p-2 text-black">
                                            <div className="flex w-full items-center justify-between">
                                                <Badge className="rounded-xs bg-violet-500 text-[10px] font-medium text-white">PHASE 4</Badge>
                                                <span className="text-[10px]">4단계</span>
                                            </div>
                                            <div className="my-1 flex flex-col items-start gap-1">
                                                <span className="font-medium">결손 번들 퀵배송</span>
                                                <p className="text-justify text-[11px] text-neutral-700">
                                                    부족한 마늘&middot;굴소스만 번들링 후 퀵커머스 20분 내 초고속 배송
                                                </p>
                                            </div>
                                            <div className="flex w-full flex-col items-start gap-1 rounded-sm border border-neutral-200/75 bg-white p-2 text-[10px]">
                                                <div className="flex w-full items-center justify-between">
                                                    <span>배송 리드타임</span>
                                                    <span className="font-medium">18.4분</span>
                                                </div>
                                                <span>B마트&middot;요마트 연동</span>
                                            </div>
                                        </Card>
                                    </div>
                                    <ArrowBigDownDash fill="#d4d4d4" className="-my-1.5 text-neutral-300" />
                                    <div className="flex w-full items-center gap-2 rounded-sm bg-neutral-50 p-2">
                                        <Badge className="rounded-xs text-[10px] font-medium">기술보호 및 데이터 보안</Badge>
                                        <div className="flex w-full items-center justify-between">
                                            <p className="font-semibold whitespace-nowrap">특허 출원 5건 완료 (식자재 객체 식별 및 결손 성분)</p>
                                            <span className="font-semibold">외부 유출 차단 [NPU 온디바이스]</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-sm font-medium">나. 주요 연구개발 목표치 및 정향적 달성 기준</span>
                                <div className="flex w-full flex-col gap-0.5">
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                            핵심 성능지표(KPI)
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-500/15 p-2.5 font-semibold">현재 수준 (MVP)</div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                            최종 개발 목표치
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                            공인시험기관 / 공인평가방법
                                        </div>
                                    </div>
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-semibold">
                                            식재료 다중객체 검출 정확도(mAP)
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">82.4%</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">
                                            <span className="rounded-xs bg-amber-300/50 font-bold text-black">89.0% 이상</span>
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-medium">
                                            한국정보통신기술협회(TTA) 성적서
                                        </div>
                                    </div>
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-semibold">
                                            온디바이스 비전 추론 지연시간
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">420ms</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">
                                            <span className="rounded-xs bg-green-300/50 font-bold text-black">250ms 이하 (INT8)</span>
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-medium">
                                            스마트폰 NPU 디바이스 벤치마크
                                        </div>
                                    </div>
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-semibold">
                                            결손 식자재 매칭 추천 적합도
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">79.0%</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">
                                            <span className="rounded-xs bg-amber-300/50 font-bold text-black">92.0% 이상</span>
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-medium">
                                            전문 셰프 및 영양학 평가단 블라인드 평가
                                        </div>
                                    </div>
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-semibold">
                                            퀵커머스 주문 번들 생성 성공률
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">91.5%</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">
                                            <span className="rounded-xs bg-green-300/50 font-bold text-black">99.5% 이상</span>
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-medium">
                                            시스템 로그 자동 집계 및 부하 시험
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* 성장 전략 */}
                    <div className="flex h-280.75 w-198.5 flex-col rounded-lg bg-white p-6 text-[11px] text-black">
                        <section className="flex items-center justify-between border-b border-black pb-2">
                            <div className="flex items-center gap-2">
                                <Badge className="rounded-xs text-[10px]">[별지 제1호 서식]</Badge>
                                <span>2026년도 창업성장기술개발사업(TIPS / 초기창업패키지) 사업계획서</span>
                            </div>
                            <div>
                                <span>과제접수번호 : </span>
                                <span>2026-TIPS-IDEA-0908</span>
                            </div>
                        </section>
                        <section className="flex flex-col gap-6 py-6">
                            <div className="flex items-center justify-between border-b border-black pb-2">
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="w-5! rounded-xs font-semibold">
                                        3
                                    </Badge>
                                    <span className="text-base font-semibold">3. 성장전략 (Scale-up) - 시장 규모 분석 및 비즈니스 모델 (BM)</span>
                                </div>
                                <Badge className="rounded-xs text-[10px]">수익모델 및 확장성 우수</Badge>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-sm font-medium">가. 목표 시장 규모 (TAM-SAM-SOM) 산출 근거 및 다이어그램</span>
                                <div className="mt-2 flex w-full flex-col items-center gap-3 rounded-sm border border-neutral-500 p-3">
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-1 text-sm">
                                            <Square fill="#000000" className="h-3 w-3" />
                                            <span className="font-medium">[도 3-1] 단계별 타깃 시장 규모 (통계청 및 농림축산식품부 유통통계 기준)</span>
                                        </div>
                                        <Badge className="rounded-xs text-[10px] font-medium">단위: 원화(KRW)</Badge>
                                    </div>
                                    <Separator className="bg-neutral-500" />
                                    <div className="flex w-full items-center gap-3">
                                        <div className="mx-3 flex w-fit items-center justify-center">
                                            <div className="relative flex h-50 w-50 items-center justify-center rounded-full border-2 border-blue-300/75 bg-blue-300/75 p-2 text-[10px]">
                                                <span className="absolute top-1.5 font-medium">TAM 14.2조원</span>
                                                <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-2 border-blue-400/75 bg-blue-400/75">
                                                    <span className="absolute top-1.5 font-medium">SAM 3.8조원</span>
                                                    <div className="flex h-22 w-22 items-center justify-center rounded-full border-2 border-blue-500/75 bg-blue-500/75">
                                                        <div className="flex flex-col items-center">
                                                            <span className="font-medium text-white">SOM (목표)</span>
                                                            <span className="text-sm font-semibold text-white">420억원</span>
                                                            <Separator className="my-1 w-8!" />
                                                            <span className="font-medium text-white">3차년도</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col gap-0.5">
                                            <div className="flex w-full items-center gap-0.5">
                                                <div className="flex h-full w-1/4 items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                                    시장 구분
                                                </div>
                                                <div className="flex h-full w-1/4 items-center justify-center bg-blue-500/15 p-2.5 font-semibold">규모</div>
                                                <div className="flex h-full w-1/2 items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                                    산출 정의 및 통계 근거
                                                </div>
                                            </div>
                                            <div className="flex w-full items-center gap-0.5">
                                                <div className="flex h-12.5 w-1/4 items-center justify-center bg-blue-50 p-2.5 font-semibold">
                                                    전체 시장 (TAM)
                                                </div>
                                                <div className="flex h-12.5 w-1/4 items-center justify-center p-2.5">
                                                    <span className="rounded-xs bg-amber-300/50 font-bold text-black">14.2조 원</span>
                                                </div>
                                                <div className="flex h-12.5 w-1/2 bg-blue-50 p-2.5 text-justify font-medium">
                                                    국내 HMR 가정간편식 및 신선식품 온라인&middot;퀵커머스 거래 총액
                                                </div>
                                            </div>
                                            <div className="flex w-full items-center gap-0.5">
                                                <div className="flex h-12.5 w-1/4 items-center justify-center bg-blue-50 p-2.5 font-semibold">
                                                    유효 시장 (SAM)
                                                </div>
                                                <div className="flex h-12.5 w-1/4 items-center justify-center p-2.5">
                                                    <span className="rounded-xs bg-green-300/50 font-bold text-black">3.8조 원</span>
                                                </div>
                                                <div className="flex h-12.5 w-1/2 bg-blue-50 p-2.5 text-justify font-medium">
                                                    수도권 및 5대 광역시 거주 2030 1&middot;2인 가구 식료품 정기 구매액
                                                </div>
                                            </div>
                                            <div className="flex w-full items-center gap-0.5">
                                                <div className="flex h-12.5 w-1/4 items-center justify-center bg-blue-50 p-2.5 font-semibold">
                                                    수익 시장 (SOM)
                                                </div>
                                                <div className="flex h-12.5 w-1/4 items-center justify-center p-2.5">
                                                    <span className="rounded-xs bg-amber-300/50 font-bold text-black">420억 원</span>
                                                </div>
                                                <div className="flex h-12.5 w-1/2 bg-blue-50 p-2.5 text-justify font-medium">
                                                    3차년도 기준 수도권 결손 번들 구매 전환 고객 35만 명 대상 매출
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-1">
                                <span className="text-sm font-medium">나. 3-Stream 가치사슬 비즈니스 모델(BM) 및 수익원 다각화 구조</span>
                                <div className="mt-2 flex w-full flex-col items-center gap-3 rounded-sm border border-neutral-500 p-3">
                                    <div className="flex w-full items-center gap-1 text-sm">
                                        <Square fill="#000000" className="h-3 w-3" />
                                        <span className="font-medium">[도 3-2] I'deaverse Dining OS 플랫폼 양방향 가치 교환 및 수익 구조</span>
                                    </div>
                                    <Separator className="bg-neutral-500" />
                                    <div className="grid w-full grid-cols-3 gap-3">
                                        <Card className="w-full gap-2 rounded-sm bg-neutral-50 p-2 text-black">
                                            <div className="flex items-center justify-center rounded-xs bg-blue-50 py-1 text-xs font-medium text-black">
                                                소비자 (1인&middot;2인 가구)
                                            </div>
                                            <p className="text-center text-[11px] text-neutral-700">
                                                냉장고 식재료 78% 소진 <br /> 15분 완성 맞춤 레시피 획득
                                            </p>
                                            <p className="rounded-sm border border-neutral-200 bg-white p-2 text-[11px] text-neutral-700">
                                                결손 번들 소액 결제 <br />+ 월 4,900원 멤버십
                                            </p>
                                        </Card>
                                        <Card className="w-full gap-2 rounded-sm border-2 border-neutral-500/50 bg-neutral-50 p-2 text-black shadow-sm">
                                            <div className="flex items-center justify-center rounded-xs bg-blue-50 py-1 text-xs font-medium text-black">
                                                중개 플랫폼 (I'deaverse OS)
                                            </div>
                                            <p className="text-center text-[11px] text-neutral-700">
                                                온디바이스 Vision AI 엔진 <br /> pgvector 결손 RAG 최적화
                                            </p>
                                            <p className="rounded-sm border border-neutral-200 bg-white p-2 text-[11px] text-neutral-700">
                                                중개 수수료 5.8%
                                                <br />+ B2B 소비패턴 데이터 SaaS
                                            </p>
                                        </Card>
                                        <Card className="w-full gap-2 rounded-sm bg-neutral-50 p-2 text-black">
                                            <div className="flex items-center justify-center rounded-xs bg-blue-50 py-1 text-xs font-medium text-black">
                                                제휴사 (퀵커머스&middot;식품서)
                                            </div>
                                            <p className="text-center text-[11px] text-neutral-700">
                                                B마트 / 요마트 배송 연동 <br /> 식품 신제품 타깃 샘플링
                                            </p>
                                            <p className="rounded-sm border border-neutral-200 bg-white p-2 text-[11px] text-neutral-700">
                                                구매 전환 수수료 지급 <br />+ 신규 고객 획득 비용 절감
                                            </p>
                                        </Card>
                                    </div>
                                    {/* 분석 텍스트 */}
                                    <div className="flex w-full flex-col gap-2 pt-1 text-[11px] leading-relaxed text-neutral-700">
                                        <p className="text-justify">
                                            본 플랫폼의 비즈니스 모델은 <span className="font-semibold text-black">소비자-플랫폼-제휴사</span>를 잇는 3-Stream
                                            양방향 가치 교환 구조로 설계되었다. 핵심 수익원은 ① 결손 번들 중개 수수료(5.8%), ② 프리미엄 멤버십 구독료(월
                                            4,900원), ③ B2B 소비패턴 데이터 SaaS 라이선스 세 축으로 구성되며, 단일 수익원 의존도를 낮추고 경기 변동에 대한
                                            복원력을 확보한다.
                                        </p>
                                        <p className="text-justify">
                                            <span className="font-semibold text-black">소비자 측면</span>에서는 온디바이스 Vision AI가 냉장고 내 잔여 식재료를
                                            자동 인식하고, pgvector 기반 결손 RAG 엔진이 부족한 식재료만을 정확히 추출하여 최적 번들을 생성한다. 이를 통해
                                            소비자는 평균 78%의 식재료 소진율과 15분 이내 완성 가능한 맞춤형 레시피를 획득하며, 식재료 낭비를 연간 가구당 약
                                            42만 원 절감할 수 있다. 멤버십 가입자에게는 영양사 큐레이션, 프리미엄 레시피, 배송비 무료 등 차별화된 혜택을
                                            제공하여 장기 잔존율(6개월 기준 72% 목표)을 확보한다.
                                        </p>
                                        <p className="text-justify">
                                            <span className="font-semibold text-black">제휴사 측면</span>에서는 B마트·요마트 등 퀵커머스 사업자와 API 직연동을
                                            통해 결손 번들 주문을 실시간 라우팅하고, 식품 대기업에게는 익명화된 소비패턴 인사이트(식재료 조합 빈도, 시간대별
                                            조리 트렌드 등)를 SaaS 형태로 제공한다. 제휴사는 신규 고객 획득 비용(CAC)을 기존 대비 35% 절감하고, 타깃 샘플링을
                                            통한 신제품 테스트 채널로 활용할 수 있어 상호 윈-윈 구조가 성립한다.
                                        </p>
                                        <p className="text-justify">
                                            결과적으로,{' '}
                                            <span className="font-semibold text-black">
                                                3차년도 기준 수익 비중은 중개 수수료 48%, 멤버십 구독 31%, B2B 데이터 SaaS 21%
                                            </span>
                                            로 분산되며, 플랫폼 전체 Take Rate은 거래액 대비 8.3%를 목표로 한다. 이는 동종 푸드테크 플랫폼 대비 높은 수준이나,
                                            소비자에게 제공하는 식재료 절감 가치(연 42만 원)와 레시피 편의성을 고려할 때 충분히 수용 가능한 수준으로 판단된다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* 성장 전략 - 다. 연차별 로드맵 (새 페이지) */}
                    <div className="flex h-280.75 w-198.5 flex-col rounded-lg bg-white p-6 text-[11px] text-black">
                        <section className="flex items-center justify-between border-b border-black pb-2">
                            <div className="flex items-center gap-2">
                                <Badge className="rounded-xs text-[10px]">[별지 제1호 서식]</Badge>
                                <span>2026년도 창업성장기술개발사업(TIPS / 초기창업패키지) 사업계획서</span>
                            </div>
                            <div>
                                <span>과제접수번호 : </span>
                                <span>2026-TIPS-IDEA-0908</span>
                            </div>
                        </section>
                        <section className="flex flex-col gap-6 py-6">
                            <GrowthRoadmapChart />
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-sm font-medium">다. 연차별 사업화 추진 로드맵 및 예상 손익계산 (BEP)</span>
                                <div className="flex w-full flex-col gap-0.5">
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-500/15 p-2.5 font-semibold">구분</div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-500/15 p-2.5 font-semibold">1차년도 (2025)</div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-500/15 p-2.5 font-semibold">2차년도 (2026)</div>
                                        <div className="flex h-full w-full items-center justify-center bg-blue-500/15 p-2.5 font-semibold">3차년도 (2027)</div>
                                    </div>
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-semibold">핵심 마일스톤</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">수도권 거점 실증 및 MVP 검증</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">
                                            <span className="rounded-xs bg-amber-300/50 font-bold text-black">전국 5대 광역시 제휴 확대</span>
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5 font-medium">동남아 2개국 진출 및 흑자 전환</div>
                                    </div>
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-semibold">월간 활성자 (MAU) </div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">50,000 명</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">
                                            <span className="rounded-xs bg-green-300/50 font-bold text-black">220,000명</span>
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5 font-medium">500,000명 </div>
                                    </div>
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-semibold">예상 연매출액 </div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">8.4억 원</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">
                                            <span className="rounded-xs bg-amber-300/50 font-bold text-black">36.0억 원</span>
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5 font-medium">112.0억 원 (흑자 전환)</div>
                                    </div>
                                    <div className="grid w-full grid-cols-4 gap-0.5">
                                        <div className="flex h-full w-full items-center justify-center bg-blue-50 p-2.5 font-semibold">영업이익 및 수익률 </div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">초기 투자 구간 (적자)</div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5">
                                            <span className="rounded-xs bg-green-300/50 font-bold text-black">BEP 근접 (영업이익 4%)</span>
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center p-2.5 font-medium">영업이익률 24.2% (27.1억)</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* 문제 인식 */}
                    <div className="flex h-280.75 w-198.5 flex-col rounded-lg bg-white p-6 text-[11px] text-black">
                        <section className="flex items-center justify-between border-b border-black pb-2">
                            <div className="flex items-center gap-2">
                                <Badge className="rounded-xs text-[10px]">[별지 제1호 서식]</Badge>
                                <span>2026년도 창업성장기술개발사업(TIPS / 초기창업패키지) 사업계획서</span>
                            </div>
                            <div>
                                <span>과제접수번호 : </span>
                                <span>2026-TIPS-IDEA-0908</span>
                            </div>
                        </section>
                        <section className="flex flex-col gap-6 py-6">
                            <div className="flex items-center justify-between border-b border-black pb-2">
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="w-5! rounded-xs font-semibold">
                                        4
                                    </Badge>
                                    <span className="text-base font-semibold">4. 팀 구성 (Team) 및 사업비 집행 계획</span>
                                </div>
                                <Badge className="rounded-xs text-[10px]">[인적역량 및 자금운용 계획]</Badge>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-sm font-medium">가. 핵심 인력 구성 및 연구개발 역량 (조직 체계도 & 인재 프로필)</span>
                                <div className="mt-2 flex w-full flex-col items-center gap-3 rounded-sm border border-neutral-500 p-3">
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-1 text-sm">
                                            <Square fill="#000000" className="h-3 w-3" />
                                            <span className="font-medium">[도 4-1] 핵심 인적 역량 및 R&D 조직 운영 체계도</span>
                                        </div>
                                        <Badge className="rounded-xs text-[10px] font-medium">전원 풀타임 상근 인력 (창업팀 지분율 92.4% 결속)</Badge>
                                    </div>
                                    <Separator className="bg-neutral-500" />
                                    <div className="flex w-full flex-col items-center gap-3">
                                        {/* CEO 카드 */}
                                        <div className="flex w-72 flex-col overflow-hidden border border-neutral-400 bg-white shadow-sm">
                                            <div className="flex items-center justify-between border-b border-neutral-300 bg-neutral-100 px-3 py-1.5">
                                                <span className="text-[10px] font-bold tracking-wide text-neutral-800 uppercase">대표이사 / 총괄책임자</span>
                                                <span className="border border-neutral-400 bg-white px-2 py-0.5 text-[9px] font-semibold text-neutral-800">
                                                    CEO
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 px-3 py-2">
                                                <div className="flex flex-col gap-0.5">
                                                    <div className="flex items-baseline gap-1.5">
                                                        <span className="text-sm font-semibold text-neutral-900">김 태 윤</span>
                                                        <span className="text-[10px] text-neutral-600">전산학 석사 / 前 K사 AI 엔지니어</span>
                                                    </div>
                                                    <span className="text-[11px] leading-relaxed text-neutral-700">
                                                        경영 총괄&middot;온디바이스 비전 AI 코어 알고리즘 설계
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <ArrowBigDownDash fill="#e5e5e5" className="-my-1 text-neutral-400" />
                                        {/* 임원진 3인 카드 */}
                                        <div className="grid w-full grid-cols-3 gap-2.5">
                                            {[
                                                {
                                                    role: '연구소장',
                                                    badge: 'CTO',
                                                    name: '박 민 우',
                                                    career: '경력 8년',
                                                    desc: 'AI 영상진단솔루션 사업화·기술영업 총괄',
                                                },
                                                {
                                                    role: '사업이사',
                                                    badge: 'CPO',
                                                    name: '이 지 은',
                                                    career: '경력 7년',
                                                    desc: '식품 버티컬 신선 SCM 기획·B2B 총괄 제휴',
                                                },
                                                {
                                                    role: '수석 연구원',
                                                    badge: 'Lead',
                                                    name: '최 영 환',
                                                    career: '경력 5년',
                                                    desc: '비전 AI 모델 개발 및 엣지 추론 엔진 최적화',
                                                },
                                            ].map((member) => (
                                                <div key={member.badge} className="flex flex-col overflow-hidden border border-neutral-300 bg-white shadow-sm">
                                                    <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-2.5 py-1.5">
                                                        <span className="text-[10px] font-bold tracking-wide text-neutral-700 uppercase">{member.role}</span>
                                                        <span className="border border-neutral-300 bg-white px-1.5 py-0.5 text-[9px] font-semibold text-neutral-700">
                                                            {member.badge}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-start gap-2 px-2.5 py-2">
                                                        <div className="flex flex-col gap-0.5">
                                                            <div className="flex flex-wrap items-baseline gap-1">
                                                                <span className="text-xs font-semibold text-neutral-900">{member.name}</span>
                                                                <span className="text-[10px] text-neutral-500">{member.career}</span>
                                                            </div>
                                                            <span className="text-[10px] leading-relaxed text-neutral-600">{member.desc}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center gap-2 rounded-sm bg-neutral-50 p-2">
                                        <Badge className="rounded-xs text-[10px] font-medium">&#8251; 사외 기술 / 산업 전문 자문단</Badge>
                                        <p className="font-semibold whitespace-nowrap">
                                            AI 비전&middot;멀티모달 전문위원 (기술 자문) & 식품 유통 총괄임원 (
                                            <span className="rounded-xs bg-amber-300/50 font-bold text-black">BM 및 물류 자문</span>)
                                        </p>
                                    </div>
                                    <div className="flex w-full flex-col gap-0.5">
                                        <div className="flex w-full items-center gap-0.5">
                                            <div className="flex h-full w-[10%] items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                                직위 / 성명
                                            </div>
                                            <div className="flex h-full w-[20%] items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                                전문 분야 &middot; 보유 기술
                                            </div>
                                            <div className="flex h-full w-[35%] items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                                주요 직무 실적 &middot; 프로젝트 수행 증빙
                                            </div>
                                            <div className="flex h-full w-[35%] items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                                본 R&D 과제 전담 역할 &middot; 핵심 역량
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center gap-0.5">
                                            <div className="flex h-full w-[10%] items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                                김태윤 (CEO)
                                            </div>
                                            <div className="flex h-full w-[20%] items-center justify-center p-2.5">
                                                컴퓨터 비전&middot;엣지 AI <br /> (경력 10년)
                                            </div>
                                            <div className="flex h-full w-[35%] items-center justify-center p-2.5 text-justify">
                                                前 K사 자율주행 비전 인식 코어 엔진 설계, NPU 기반 객체 탐지 알고리즘 최적화 기술 특허 2건 보유
                                            </div>
                                            <div className="flex h-full w-[35%] items-center justify-center bg-blue-50 p-2.5 text-justify font-medium">
                                                R&D 총괄&middot;비전 AI 코어 모델 설계 및 사업화 전략 수립
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center gap-0.5">
                                            <div className="flex h-full w-[10%] items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                                박민우 (CTO)
                                            </div>
                                            <div className="flex h-full w-[20%] items-center justify-center p-2.5 text-center">
                                                클라우드 아키텍처&middot;데이터 엔지니어링
                                                <br />
                                                (경력 8년)
                                            </div>
                                            <div className="flex h-full w-[35%] items-center justify-center p-2.5 text-justify">
                                                대규모 분산처리 플랫폼 엔지니어링 5년, 초당 수만 건 트래픽 처리 시스템 구축 및 추천 알고리즘 설계 특허 3건
                                            </div>
                                            <div className="flex h-full w-[35%] items-center justify-center bg-blue-50 p-2.5 text-justify font-medium">
                                                클라우드 인프라 아키텍처 설계&middot;비전 데이터 파이프라인 구축
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center gap-0.5">
                                            <div className="flex h-full w-[10%] items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                                이지은 (CPO)
                                            </div>
                                            <div className="flex h-full w-[20%] items-center justify-center p-2.5 text-center">
                                                B2B 서비스 기획&middot;신선식품 SCM
                                                <br />
                                                (경력 7년)
                                            </div>
                                            <div className="flex h-full w-[35%] items-center justify-center p-2.5 text-justify">
                                                대형 커머스 신선 물류 프로세스 설계, 600여 개 산지 농가 네트워크 구축 및 퀵커머스 플랫폼 상품화 총괄 경험
                                            </div>
                                            <div className="flex h-full w-[35%] items-center justify-center bg-blue-50 p-2.5 text-justify font-medium">
                                                식자재 당일 소진 비즈니스 모델 검증&middot;사용자 경험(UX) 고도화
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center gap-0.5">
                                            <div className="flex h-full w-[10%] items-center justify-center bg-blue-500/15 p-2.5 font-semibold">
                                                최영환 (Lead)
                                            </div>
                                            <div className="flex h-full w-[20%] items-center justify-center p-2.5 text-center">
                                                AI 모델 최적화&middot;MLOps
                                                <br />
                                                (경력 5년)
                                            </div>
                                            <div className="flex h-full w-[35%] items-center justify-center p-2.5 text-justify">
                                                비전 모델 경량화(Pruning/Quantization) 기법을 통한 추론 속도 400% 향상, 대규모 이미지 데이터 자동화 파이프라인
                                                구축
                                            </div>
                                            <div className="flex h-full w-[35%] items-center justify-center bg-blue-50 p-2.5 text-justify font-medium">
                                                온디바이스 엣지 추론 엔진 최적화&middot;AI 모델 서빙 환경 구축
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* 새로운 A4 페이지 시작 */}
                    <div className="flex h-280.75 w-198.5 flex-col bg-white p-6 text-[11px] text-black shadow-md">
                        <section className="flex items-center justify-between border-b border-black pb-2">
                            <div className="flex items-center gap-2">
                                <Badge className="rounded-xs text-[10px]">[별지 제1호 서식]</Badge>
                                <span>2026년도 창업성장기술개발사업(TIPS / 초기창업패키지) 사업계획서</span>
                            </div>
                            <div>
                                <span>과제접수번호 : </span>
                                <span>2026-TIPS-IDEA-0908</span>
                            </div>
                        </section>
                        <section className="flex flex-col gap-6 py-6">
                            {/* 나. 고용 창출 및 단계별 인재 채용 로드맵 */}
                            <div className="flex flex-col items-start gap-2">
                                <span className="text-sm font-semibold">나. 고용 창출 및 단계별 인재 채용 로드맵 (연차별 팀 스케일업)</span>
                                <div className="mt-2 flex w-full flex-col items-center gap-3 rounded-sm border border-neutral-500 p-3">
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-1.5 text-sm font-bold text-neutral-800">
                                            <Square fill="#000000" className="h-2.5 w-2.5" />
                                            <span>[도 4-2] 3개년 연차별 신규 채용 및 직군별 인력 확충 로드맵</span>
                                        </div>
                                        <span className="border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-700">
                                            3개년 누적 인원 : 4명 → 10명 → 18명
                                        </span>
                                    </div>
                                    <Separator className="bg-neutral-300" />
                                    {/* 연차별 타임라인 인포그래픽 */}
                                    <div className="flex w-full items-stretch gap-2">
                                        {[
                                            {
                                                year: '1차년도',
                                                period: '2025',
                                                headcount: '4명 → 6명',
                                                hires: '+2명 신규',
                                                roles: [
                                                    { dept: 'R&D', role: 'AI 비전 엔지니어', count: 1 },
                                                    { dept: '기획', role: 'UX/서비스 기획자', count: 1 },
                                                ],
                                                goal: 'MVP 검증 및 핵심 기술 내재화',
                                            },
                                            {
                                                year: '2차년도',
                                                period: '2026',
                                                headcount: '6명 → 12명',
                                                hires: '+6명 신규',
                                                roles: [
                                                    { dept: 'R&D', role: 'MLOps / 데이터 엔지니어', count: 2 },
                                                    { dept: '영업', role: 'B2B 세일즈 / 파트너십', count: 2 },
                                                    { dept: '운영', role: '고객성공(CS) / 운영기획', count: 2 },
                                                ],
                                                goal: '전국 확산 및 제휴 네트워크 구축',
                                            },
                                            {
                                                year: '3차년도',
                                                period: '2027',
                                                headcount: '12명 → 20명',
                                                hires: '+8명 신규',
                                                roles: [
                                                    { dept: 'R&D', role: '글로벌 AI 리서처', count: 2 },
                                                    { dept: '사업', role: '해외사업개발(BD)', count: 2 },
                                                    { dept: '마케팅', role: '그로스 마케터 / 브랜드', count: 2 },
                                                    { dept: '재무', role: 'CFO / 재무기획', count: 2 },
                                                ],
                                                goal: '동남아 진출 및 흑자 전환',
                                            },
                                        ].map((item, i) => (
                                            <div key={item.year} className="flex flex-1 flex-col gap-2 border border-neutral-300 bg-white p-2.5">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="flex h-5 w-5 items-center justify-center border border-neutral-400 bg-neutral-100 text-[9px] font-bold text-neutral-800">
                                                            {i + 1}
                                                        </span>
                                                        <span className="font-bold text-neutral-900">
                                                            {item.year} <span className="font-normal text-neutral-500">({item.period})</span>
                                                        </span>
                                                    </div>
                                                    <span className="border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[10px] font-bold text-neutral-800">
                                                        {item.hires}
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between border-y border-neutral-200 bg-neutral-50 px-2 py-1 text-[10px]">
                                                    <span className="text-neutral-500">누적 인원</span>
                                                    <span className="font-bold text-neutral-900">{item.headcount}</span>
                                                </div>
                                                <div className="flex flex-col gap-1 py-1">
                                                    {item.roles.map((r) => (
                                                        <div key={r.role} className="flex items-start gap-1.5 text-[10px]">
                                                            <span className="mt-px flex shrink-0 items-center border border-neutral-300 bg-neutral-100 px-1 font-semibold text-neutral-700">
                                                                {r.dept}
                                                            </span>
                                                            <span className="text-neutral-700">
                                                                {r.role} ({r.count}명)
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-auto border-t border-neutral-200 pt-1.5 text-[10px] font-medium text-neutral-600">
                                                    - {item.goal}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* 인원 성장 프로그레스 바 -> 모노톤 블록 형태 */}
                                    <div className="flex w-full flex-col gap-2 border border-neutral-300 bg-neutral-50 p-3">
                                        <span className="text-[10px] font-bold text-neutral-800">직군별 연차 인력 구성 (누적 기준)</span>
                                        {[
                                            { dept: 'R&D / 기술', y1: 4, y2: 6, y3: 10, max: 20 },
                                            { dept: '영업 / 파트너십', y1: 0, y2: 2, y3: 4, max: 20 },
                                            { dept: '운영 / CS', y1: 0, y2: 2, y3: 4, max: 20 },
                                            { dept: '경영 지원', y1: 0, y2: 2, y3: 2, max: 20 },
                                        ].map((row) => (
                                            <div key={row.dept} className="flex items-center gap-2 text-[10px]">
                                                <span className="w-24 shrink-0 font-medium text-neutral-700">{row.dept}</span>
                                                <div className="relative flex h-3.5 flex-1 overflow-hidden border border-neutral-300 bg-white">
                                                    <div
                                                        className="absolute top-0 left-0 h-full bg-neutral-300"
                                                        style={{ width: `${(row.y3 / row.max) * 100}%` }}
                                                    />
                                                    <div
                                                        className="absolute top-0 left-0 h-full bg-neutral-500"
                                                        style={{ width: `${(row.y2 / row.max) * 100}%` }}
                                                    />
                                                    <div
                                                        className="absolute top-0 left-0 h-full bg-neutral-800"
                                                        style={{ width: `${(row.y1 / row.max) * 100}%` }}
                                                    />
                                                </div>
                                                <div className="flex w-28 shrink-0 items-center justify-end gap-1 text-neutral-500">
                                                    <span>
                                                        {row.y1} → {row.y2} → <strong className="font-bold text-neutral-900">{row.y3}</strong> 명
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="mt-1 flex items-center justify-center gap-4 text-[9px] text-neutral-600">
                                            <span className="flex items-center gap-1.5">
                                                <span className="inline-block h-2 w-2 bg-neutral-800"></span>1차년도
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <span className="inline-block h-2 w-2 bg-neutral-500"></span>2차년도
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <span className="inline-block h-2 w-2 border border-neutral-400 bg-neutral-300"></span>3차년도
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 다. 총 사업비 산출 내역 및 비목별 예산 집행 계획 */}
                            <div className="flex flex-col items-start gap-2">
                                <span className="text-sm font-semibold">다. 총 사업비 산출 내역 및 비목별 예산 집행 계획 (총 6.5억 원)</span>
                                <div className="mt-2 flex w-full flex-col items-center gap-3 rounded-sm border border-neutral-500 p-3">
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-1.5 text-sm font-bold text-neutral-800">
                                            <Square fill="#000000" className="h-2.5 w-2.5" />
                                            <span>[도 4-3] 비목별 예산 집행 소요 명세 및 재원 배분</span>
                                        </div>
                                        <span className="border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-700">
                                            총 사업비 650,000,000원 (정부 1.5억 + 민간 3.5억 + 자체 1.5억)
                                        </span>
                                    </div>
                                    <Separator className="bg-neutral-300" />

                                    {/* 재원 구성 바 */}
                                    <div className="flex w-full flex-col gap-2 border border-neutral-300 bg-neutral-50 p-3">
                                        <span className="text-[10px] font-bold text-neutral-800">재원 구성 비율</span>
                                        <div className="flex h-4 w-full overflow-hidden border border-neutral-300">
                                            <div
                                                className="flex h-full items-center justify-center bg-neutral-700 text-[9px] font-bold text-white"
                                                style={{ width: '23.1%' }}
                                            >
                                                정부 23.1%
                                            </div>
                                            <div
                                                className="flex h-full items-center justify-center bg-neutral-400 text-[9px] font-bold text-neutral-900"
                                                style={{ width: '53.8%' }}
                                            >
                                                민간 53.8%
                                            </div>
                                            <div
                                                className="flex h-full items-center justify-center bg-neutral-200 text-[9px] font-bold text-neutral-800"
                                                style={{ width: '23.1%' }}
                                            >
                                                자체 23.1%
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center gap-5 text-[10px] text-neutral-700">
                                            <span className="flex items-center gap-1.5">
                                                <span className="inline-block h-2 w-2 bg-neutral-700"></span>정부출연금 150,000,000원
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <span className="inline-block h-2 w-2 border border-neutral-500 bg-neutral-400"></span>민간투자금 350,000,000원
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <span className="inline-block h-2 w-2 border border-neutral-400 bg-neutral-200"></span>자체부담금 150,000,000원
                                            </span>
                                        </div>
                                    </div>

                                    {/* 비목별 예산 요약 (심플한 막대 그래프) */}
                                    <div className="flex w-full flex-col gap-0.5 border border-neutral-300 bg-white p-3">
                                        <span className="mb-1 text-[10px] font-bold text-neutral-800">비목별 예산 배분 현황</span>
                                        {[
                                            { category: '인건비', amount: 260000000, ratio: 40.0, desc: '핵심 R&D 인력 4인 인건비 (풀타임)' },
                                            { category: '연구개발비', amount: 130000000, ratio: 20.0, desc: 'AI 모델 개발·데이터 수집·검증 비용' },
                                            { category: '외주용역비', amount: 97500000, ratio: 15.0, desc: 'UX 디자인·보안 감리·특허 출원' },
                                            { category: '마케팅·홍보비', amount: 65000000, ratio: 10.0, desc: '초기 고객 획득·B2B 영업 지원' },
                                            { category: '기자재·장비비', amount: 52000000, ratio: 8.0, desc: '엣지 디바이스·서버 인프라 구축' },
                                            { category: '간접비·기타', amount: 45500000, ratio: 7.0, desc: '운영비·보험·회계·법무 자문' },
                                        ].map((item, idx) => (
                                            <div key={item.category} className="flex flex-col gap-1">
                                                <div className="flex items-center justify-between text-[10px]">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="w-16 font-semibold text-neutral-900">{item.category}</span>
                                                        <span className="text-neutral-500">| {item.desc}</span>
                                                    </div>
                                                    <div className="flex shrink-0 items-center gap-3">
                                                        <span className="font-bold text-neutral-800">{(item.amount / 100000000).toFixed(2)}억 원</span>
                                                        <span className="w-8 text-right font-medium text-neutral-500">{item.ratio}%</span>
                                                    </div>
                                                </div>
                                                <div className="h-1.5 w-full overflow-hidden bg-neutral-100">
                                                    <div className="h-full bg-neutral-600" style={{ width: `${item.ratio}%` }} />
                                                </div>
                                                {idx !== 5 && <div className="my-1 border-b border-dashed border-neutral-200"></div>}
                                            </div>
                                        ))}
                                    </div>

                                    {/* 연차별 예산 집행 표 (표준 문서 형식) */}
                                    <div className="flex w-full flex-col border border-neutral-400 text-[10px]">
                                        <div className="grid w-full grid-cols-5 border-b border-neutral-400 bg-neutral-100 font-bold text-neutral-900">
                                            <div className="flex items-center justify-center border-r border-neutral-400 py-1.5">비목</div>
                                            <div className="flex items-center justify-center border-r border-neutral-400 py-1.5">1차년도 (2025)</div>
                                            <div className="flex items-center justify-center border-r border-neutral-400 py-1.5">2차년도 (2026)</div>
                                            <div className="flex items-center justify-center border-r border-neutral-400 py-1.5">3차년도 (2027)</div>
                                            <div className="flex items-center justify-center py-1.5">합계</div>
                                        </div>
                                        {[
                                            { category: '인건비', y1: '8,000', y2: '10,000', y3: '8,000', total: '26,000' },
                                            { category: '연구개발비', y1: '5,000', y2: '5,000', y3: '3,000', total: '13,000' },
                                            { category: '외주용역비', y1: '4,000', y2: '3,500', y3: '2,250', total: '9,750' },
                                            { category: '마케팅·홍보비', y1: '1,500', y2: '2,500', y3: '2,500', total: '6,500' },
                                            { category: '기자재·장비비', y1: '3,200', y2: '1,500', y3: '500', total: '5,200' },
                                            { category: '간접비·기타', y1: '1,500', y2: '1,750', y3: '1,300', total: '4,550' },
                                        ].map((row, i) => (
                                            <div
                                                key={row.category}
                                                className="grid w-full grid-cols-5 border-b border-neutral-300 text-neutral-700 last:border-b-0"
                                            >
                                                <div className="flex items-center justify-center border-r border-neutral-300 bg-neutral-50 py-1.5 font-semibold text-neutral-800">
                                                    {row.category}
                                                </div>
                                                <div className="flex items-center justify-center border-r border-neutral-300 py-1.5">{row.y1}만원</div>
                                                <div className="flex items-center justify-center border-r border-neutral-300 py-1.5">{row.y2}만원</div>
                                                <div className="flex items-center justify-center border-r border-neutral-300 py-1.5">{row.y3}만원</div>
                                                <div className="flex items-center justify-center bg-neutral-50 py-1.5 font-bold text-neutral-900">
                                                    {row.total}만원
                                                </div>
                                            </div>
                                        ))}
                                        <div className="grid w-full grid-cols-5 border-t border-neutral-400 bg-neutral-200 font-bold text-neutral-900">
                                            <div className="flex items-center justify-center border-r border-neutral-400 py-2">합계</div>
                                            <div className="flex items-center justify-center border-r border-neutral-400 py-2">23,200만원</div>
                                            <div className="flex items-center justify-center border-r border-neutral-400 py-2">24,250만원</div>
                                            <div className="flex items-center justify-center border-r border-neutral-400 py-2">17,550만원</div>
                                            <div className="flex items-center justify-center py-2">65,000만원</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </TabsContent>
            </div>
        </div>
    )
}
