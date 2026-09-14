'use client'

import { ComposedChart, Bar, Line, CartesianGrid, XAxis, YAxis, ReferenceLine, Cell } from 'recharts'
import { ChartContainer } from '@/components/ui'
import type { ChartConfig } from '@/components/ui'
import { Badge } from '@/components/ui'

/* ──────────────────────────────────────────────
   데이터 & 설정 (12개 분기)
────────────────────────────────────────────── */
const chartData = [
    { quarter: '25.1Q', fullQuarter: '2025.1Q', year: '2025', revenue: 0.5, profit: -3.2, keyLabel: null },
    { quarter: '25.2Q', fullQuarter: '2025.2Q', year: '2025', revenue: 2.0, profit: -2.8, keyLabel: null },
    { quarter: '25.3Q', fullQuarter: '2025.3Q', year: '2025', revenue: 4.5, profit: -2.1, keyLabel: null },
    { quarter: '25.4Q', fullQuarter: '2025.4Q', year: '2025', revenue: 8.4, profit: -1.2, keyLabel: '8.4억' },
    { quarter: '26.1Q', fullQuarter: '2026.1Q', year: '2026', revenue: 13.0, profit: -0.6, keyLabel: null },
    { quarter: '26.2Q', fullQuarter: '2026.2Q', year: '2026', revenue: 20.0, profit: 0.4, keyLabel: '20억 (BEP)' },
    { quarter: '26.3Q', fullQuarter: '2026.3Q', year: '2026', revenue: 28.0, profit: 2.8, keyLabel: null },
    { quarter: '26.4Q', fullQuarter: '2026.4Q', year: '2026', revenue: 36.0, profit: 5.4, keyLabel: '36.0억' },
    { quarter: '27.1Q', fullQuarter: '2027.1Q', year: '2027', revenue: 52.0, profit: 10.2, keyLabel: null },
    { quarter: '27.2Q', fullQuarter: '2027.2Q', year: '2027', revenue: 72.0, profit: 16.8, keyLabel: null },
    { quarter: '27.3Q', fullQuarter: '2027.3Q', year: '2027', revenue: 92.0, profit: 24.1, keyLabel: null },
    { quarter: '27.4Q', fullQuarter: '2027.4Q', year: '2027', revenue: 112.0, profit: 33.6, keyLabel: '112.0억' },
]

const chartConfig = {
    revenue: { label: '매출액 (억원)', color: '#2563eb' },
    profit: { label: '영업이익 (억원)', color: '#475569' },
} satisfies ChartConfig

/* ──────────────────────────────────────────────
   단계별 성장전략 데이터
────────────────────────────────────────────── */
const phases = [
    {
        id: 'phase1',
        year: '1차년도',
        period: '2025',
        label: 'Phase 1',
        theme: '기반 실증',
        color: {
            border: 'border-neutral-300',
            header: 'bg-neutral-100',
            badge: 'bg-neutral-600 text-white',
            accent: 'text-neutral-700',
            kpi: 'bg-neutral-600 text-white',
        },
        axis: ['고객 확보', '기술 검증', '운영 기반'],
        strategies: [
            { label: '고객 확대', content: '수도권 1·2인 가구 집중 타깃 → 베타 5,000명 확보' },
            { label: '기술 고도화', content: 'YOLOv8s INT8 온디바이스 정확도 89%+ 달성' },
            { label: '매출 성장', content: '퀵커머스 API 연동 수수료 구조 검증 · 초기 매출 실현' },
            { label: '시장 확장', content: '서울·경기 거점 실증 → 퀵커머스 2개사 MOU 체결' },
        ],
        kpiValue: '연 8.4억 매출 · MAU 5만',
        revenueTarget: '8.4억',
        arrow: true,
    },
    {
        id: 'phase2',
        year: '2차년도',
        period: '2026',
        label: 'Phase 2',
        theme: 'BEP 돌파',
        color: {
            border: 'border-blue-300',
            header: 'bg-blue-50',
            badge: 'bg-blue-600 text-white',
            accent: 'text-blue-700',
            kpi: 'bg-blue-600 text-white',
        },
        axis: ['고객 확대', '매출 확장', '사업 고도화'],
        strategies: [
            { label: '고객 확대', content: '전국 5대 광역시 확장 → 유료 구독 전환율 18% 달성' },
            { label: '기술 고도화', content: '결손 번들 식자재 라인업 180종 고도화 · B2B 제휴 개시' },
            { label: '매출 성장', content: 'B2B 유통 대기업 파트너십 체결 → 구독 MRR 누적 성장' },
            { label: '시장 확장', content: '4분기 BEP 공식 돌파 → 흑자전환 기반 마련' },
        ],
        kpiValue: '연 36억 매출 · MAU 22만 · 흑자전환',
        revenueTarget: '36.0억',
        arrow: true,
    },
    {
        id: 'phase3',
        year: '3차년도',
        period: '2027',
        label: 'Phase 3',
        theme: '스케일업',
        color: {
            border: 'border-blue-400',
            header: 'bg-blue-100/50',
            badge: 'bg-blue-700 text-white',
            accent: 'text-blue-800',
            kpi: 'bg-blue-700 text-white',
        },
        axis: ['지속 성장', '수익 극대화', '글로벌 확장'],
        strategies: [
            { label: '고객 확대', content: '동남아(싱가포르·베트남) K-Food 소스 연계 해외 진출' },
            { label: '기술 고도화', content: '프리미엄 멤버십 35% 비중 달성 · 반복매출 구조 정착' },
            { label: '매출 성장', content: '연 112억 달성 (CAGR +265%) · 영업이익률 30%+' },
            { label: '시장 확장', content: '식자재 낭비 절감 글로벌 3대 표준 선도 · 브랜드 경쟁력' },
        ],
        kpiValue: '연 112억 매출 · MAU 50만 · 글로벌 진출',
        revenueTarget: '112.0억',
        arrow: false,
    },
] as const

/* ──────────────────────────────────────────────
   커스텀 막대 상단 뱃지 라벨 컴포넌트
────────────────────────────────────────────── */
function CustomBarLabel(props: any) {
    const { x, y, width, index } = props
    const item = chartData[index]
    if (!item || !item.keyLabel) return null

    const isBEP = item.quarter === '26.2Q'

    return (
        <g transform={`translate(${x + width / 2}, ${y - 8})`}>
            <rect
                x={isBEP ? -32 : -22}
                y={-14}
                width={isBEP ? 64 : 44}
                height={16}
                rx={2}
                fill={isBEP ? '#fff7ed' : '#f8fafc'}
                stroke={isBEP ? '#ea580c' : '#cbd5e1'}
                strokeWidth={1}
            />
            <text x={0} y={-3} textAnchor="middle" fontSize={8.5} fontWeight={700} fill={isBEP ? '#c2410c' : '#1e293b'}>
                {item.keyLabel}
            </text>
        </g>
    )
}

/* ──────────────────────────────────────────────
   메인 컴포넌트
────────────────────────────────────────────── */
export function GrowthRoadmapChart() {
    return (
        <div className="flex w-full flex-col gap-0 rounded-sm border border-neutral-300 bg-white text-black">
            {/* ── 도표 헤더 ── */}
            <div className="flex items-center justify-between rounded-t-sm border-b border-neutral-300 bg-neutral-50 px-3 py-2">
                <div className="flex items-center gap-1.5">
                    <div className="h-3 w-3 bg-black" />
                    <span className="font-medium">[도 3-3] 3개년 성장전략 로드맵 — 핵심 지표 성장 궤적 및 매출·손익 달성 곡선</span>
                </div>
                <Badge className="rounded-none border border-neutral-300 bg-white px-2 py-0.5 text-[9px] font-medium text-neutral-600">
                    기준: 2025~2027 회계연도 (단위: 억원)
                </Badge>
            </div>

            <div className="flex flex-col gap-0 p-3">
                {/* ── ① 4대 성장축 범례 ── */}
                <div className="mb-2 flex items-center gap-1.5">
                    <span className="shrink-0 text-[9px] font-semibold text-neutral-600">4대 성장축</span>
                    <span className="text-[9px] text-neutral-300">|</span>
                    {[{ label: '① 고객 확대' }, { label: '② 기술 고도화' }, { label: '③ 매출 성장' }, { label: '④ 시장 확장' }].map((ax) => (
                        <span
                            key={ax.label}
                            className="rounded-none border border-neutral-300 bg-neutral-50 px-1.5 py-0.5 text-[9px] font-medium text-neutral-600"
                        >
                            {ax.label}
                        </span>
                    ))}
                </div>

                {/* ── ② 성장 궤적 차트 ── */}
                <div className="relative w-full overflow-hidden rounded-none border border-neutral-300 bg-white">
                    {/* 연도 배경 구분 및 라벨 (절대 위치, 차트 내부) */}
                    <div className="pointer-events-none absolute inset-0 top-0 bottom-[28px] flex pr-[36px] pl-[32px]">
                        {/* 2025 */}
                        <div className="relative h-full flex-1 border-r border-dashed border-neutral-300 bg-neutral-50/40">
                            <div className="absolute top-1.5 left-2">
                                <span className="rounded-none border border-neutral-300 bg-white/95 px-2 py-0.5 text-[8.5px] font-bold text-neutral-700 shadow-2xs">
                                    2025년 · Phase 1 기반실증
                                </span>
                            </div>
                        </div>
                        {/* 2026 */}
                        <div className="relative h-full flex-1 border-r border-dashed border-blue-200 bg-blue-50/20">
                            <div className="absolute top-1.5 left-2">
                                <span className="rounded-none border border-blue-200 bg-white/95 px-2 py-0.5 text-[8.5px] font-bold text-blue-700 shadow-2xs">
                                    2026년 · Phase 2 BEP 돌파
                                </span>
                            </div>
                        </div>
                        {/* 2027 */}
                        <div className="relative h-full flex-1 bg-blue-50/40">
                            <div className="absolute top-1.5 left-2">
                                <span className="rounded-none border border-blue-300 bg-white/95 px-2 py-0.5 text-[8.5px] font-bold text-blue-800 shadow-2xs">
                                    2027년 · Phase 3 스케일업
                                </span>
                            </div>
                        </div>
                    </div>

                    <ChartContainer config={chartConfig} className="aspect-auto h-52 w-full pt-4">
                        <ComposedChart data={chartData} margin={{ top: 24, right: 36, left: 32, bottom: 4 }} barCategoryGap="24%">
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis
                                dataKey="quarter"
                                tickLine={false}
                                axisLine={{ stroke: '#cbd5e1' }}
                                tick={{ fontSize: 8.5, fill: '#475569', fontWeight: 500 }}
                                interval={0}
                            />
                            <YAxis
                                yAxisId="rev"
                                orientation="left"
                                tickLine={false}
                                axisLine={false}
                                tick={{ fontSize: 8, fill: '#64748b' }}
                                domain={[0, 130]}
                                tickFormatter={(v: number) => `${v}`}
                                width={24}
                            />

                            {/* BEP 돌파 시점 수직선 (2026.2Q) */}
                            <ReferenceLine yAxisId="rev" x="26.2Q" stroke="#ea580c" strokeDasharray="3 3" strokeWidth={1.2} />
                            {/* 매출액 메인 막대 (Bar) */}
                            <Bar yAxisId="rev" dataKey="revenue" isAnimationActive={false} radius={[3, 3, 0, 0]} barSize={20} label={<CustomBarLabel />}>
                                {chartData.map((entry) => {
                                    const fill = entry.year === '2025' ? '#60a5fa' : entry.year === '2026' ? '#2563eb' : '#1d4ed8'
                                    return <Cell key={entry.quarter} fill={fill} />
                                })}
                            </Bar>
                        </ComposedChart>
                    </ChartContainer>

                    {/* 차트 하단 범례 */}
                    <div className="flex flex-wrap items-center gap-4 border-t border-neutral-200 bg-neutral-50 px-3 py-1.5">
                        <div className="flex items-center gap-1.5">
                            <div className="rounded-2xs h-3 w-3 bg-blue-600" />
                            <span className="text-[9px] font-semibold text-neutral-700">매출액 (좌축 · Bar · 억원)</span>
                        </div>

                        <div className="ml-auto flex items-center gap-1.5">
                            <span className="rounded-none border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[8.5px] font-bold text-orange-700">
                                ★ 2026.2Q BEP 흑자전환
                            </span>
                            <span className="rounded-none border border-blue-300 bg-blue-50 px-2 py-0.5 text-[8.5px] font-bold text-blue-700">
                                매출 CAGR +265%
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── ③ 성장전략 카드 ── */}
                <div className="mt-2.5">
                    {/* 카드 행 */}
                    <div className="flex items-stretch gap-0">
                        {phases.map((ph) => (
                            <div key={ph.id} className="flex flex-1 items-stretch">
                                <div className={`flex flex-1 flex-col overflow-hidden rounded-none border ${ph.color.border}`}>
                                    {/* 카드 헤더 */}
                                    <div className={`${ph.color.header} border-b ${ph.color.border} px-2.5 py-1.5`}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1.5">
                                                <span className={`rounded-none px-1.5 py-0.5 text-[9px] font-bold ${ph.color.badge}`}>{ph.label}</span>
                                                <span className={`text-[9px] font-semibold ${ph.color.accent}`}>
                                                    {ph.year} — {ph.theme}
                                                </span>
                                            </div>
                                            <span className="text-[9px] text-neutral-500">목표: {ph.revenueTarget}</span>
                                        </div>
                                        <div className="mt-1.5 flex flex-wrap gap-1">
                                            {ph.axis.map((a) => (
                                                <span
                                                    key={a}
                                                    className="rounded-none border border-neutral-300 bg-white px-1 py-0 text-[9px] font-medium text-neutral-600"
                                                >
                                                    {a}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 전략 리스트 */}
                                    <div className="flex flex-1 flex-col divide-y divide-neutral-100 bg-white">
                                        {ph.strategies.map((st) => (
                                            <div key={st.label} className="flex flex-col gap-0.5 px-2.5 py-1.5">
                                                <span className="text-[9px] font-semibold text-neutral-800">▪ {st.label}</span>
                                                <p className="line-clamp-2 h-[30px] text-justify text-[9px] leading-[15px] text-neutral-600">{st.content}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* KPI 푸터 */}
                                    <div className={`border-t ${ph.color.border} ${ph.color.header} px-2.5 py-1.5`}>
                                        <div className="flex items-center gap-1.5">
                                            <span className={`rounded-none px-1.5 py-0.5 text-[9px] font-bold ${ph.color.kpi}`}>핵심목표</span>
                                            <span className="text-[9.5px] font-semibold text-neutral-700">{ph.kpiValue}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 화살표 */}
                                {ph.arrow && (
                                    <div className="flex w-5 shrink-0 items-center justify-center bg-white">
                                        <svg width="10" height="10" viewBox="0 0 10 10" className="text-neutral-400">
                                            <polygon points="0,0 10,5 0,10" fill="currentColor" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── ④ 성장 동력 연결 흐름 요약 ── */}
                <div className="mt-2 flex w-full divide-x divide-neutral-200 border border-neutral-300 bg-white">
                    {[
                        { step: '성장 동력', content: '온디바이스 AI · 퀵커머스 연동', sub: '기술 차별화', color: 'bg-neutral-600' },
                        { step: '실행 전략', content: '고객 확대 → B2B 제휴 → 구독화', sub: '수익 구조 고도화', color: 'bg-blue-500' },
                        { step: '성과 지표', content: 'BEP 돌파 · CAGR 265% · MAU 50만', sub: '2026.2Q 흑자전환', color: 'bg-blue-600' },
                        { step: '차기 성장', content: '동남아 진출 · 멤버십 35%', sub: '글로벌 지속 성장', color: 'bg-blue-700' },
                    ].map((item, i) => (
                        <div key={item.step} className="flex flex-1 flex-col p-2.5">
                            <div className="mb-2 flex items-center gap-1.5 border-b border-neutral-100 pb-1.5">
                                <span className={`rounded-none px-1.5 py-0.5 text-[9px] font-bold text-white ${item.color}`}>{item.step}</span>
                                <span className="text-[9px] font-semibold text-neutral-500">{item.sub}</span>
                            </div>
                            <span className="text-left text-[9.5px] leading-relaxed font-semibold text-neutral-800">{item.content}</span>
                        </div>
                    ))}
                </div>

                {/* ── 주석 ── */}
                <p className="mt-1.5 text-right text-[8.5px] text-neutral-400">
                    ※ 영업이익은 제조원가·마케팅비·인건비 포함 기준 추정치 / BEP: Break-Even Point (손익분기점)
                </p>
            </div>
        </div>
    )
}
