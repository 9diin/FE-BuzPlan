import Image from 'next/image'
import localFont from 'next/font/local'
import { Button, Tabs, TabsList, TabsTrigger } from '../ui'

const cafe24Classic = localFont({
    src: '../../public/fonts/Cafe24Classictype-v1.1.woff2',
    display: 'swap',
})

export default function AppHeader() {
    return (
        <header className="flex w-full items-center gap-4">
            {/* 로고 영역 */}
            <div className="flex w-72 min-w-72 items-center gap-1.5">
                <Image src={'/icons/logo.svg'} alt="@LOGO" width={22} height={22} />
                <span className={`${cafe24Classic.className} text-xl`}>I&apos;deaverse</span>
            </div>
            <div className="flex flex-1 items-center justify-between">
                {/* 탭 영역 */}
                <TabsList className="h-9!">
                    <TabsTrigger value="overview">아이디어 구조화</TabsTrigger>
                    <TabsTrigger value="analytics">사업계획서 도출</TabsTrigger>
                </TabsList>
                {/* 버튼 영역 */}
                <div className="flex items-center gap-2">
                    <Button size="lg" variant="outline">
                        <Image src={'/icons/ai.svg'} alt="@LOGO" width={20} height={20} />
                        AI 연결
                    </Button>
                    <Button
                        size="lg"
                        className="border-0 bg-linear-to-br from-[#2044C7] to-[#9C13A0] px-2.5 text-white shadow-sm transition-all hover:brightness-110 active:brightness-95"
                    >
                        로그인
                    </Button>
                </div>
            </div>
        </header>
    )
}
