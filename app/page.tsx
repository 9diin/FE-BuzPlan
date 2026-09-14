import { TabsContent } from '@/components/ui'
import { Lightbulb } from 'lucide-react'
import {
    SidebarPanel,
    ProblemSection,
    FeasibilitySection,
    GrowthStrategySection,
    TeamBudgetSection,
} from '@/components/business-plan'

export default function Home() {
    return (
        <div className="flex h-full w-full items-center gap-4">
            {/* 좌측 사이드바 패널 */}
            <SidebarPanel />

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
                    className="flex w-full flex-1 flex-col items-center justify-start gap-6 overflow-y-scroll rounded-lg border border-border/50 bg-card/50 bg-[radial-gradient(oklch(1_0_0/0.12)_1.5px,transparent_1.5px)] [background-size:20px_20px] p-6 text-center"
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
