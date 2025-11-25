import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="text-xl font-bold text-amber-100 tracking-wider">
              古民家サウナ 和蒸
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              築100年の古民家で過ごす、<br />
              心と体を整える極上のサウナ体験。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-amber-100 font-semibold mb-4">メニュー</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#concept" className="hover:text-amber-100 transition-colors">
                  コンセプト
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-100 transition-colors">
                  施設紹介
                </a>
              </li>
              <li>
                <a href="#flow" className="hover:text-amber-100 transition-colors">
                  ご利用の流れ
                </a>
              </li>
              <li>
                <a href="#access" className="hover:text-amber-100 transition-colors">
                  アクセス
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-100 transition-colors">
                  ご予約・お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-amber-100 font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>〒000-0000</li>
              <li>○○県○○市○○町1-2-3</li>
              <li className="mt-4">TEL: 000-000-0000</li>
              <li>営業時間: 10:00 - 22:00</li>
              <li>定休日: 水曜日</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-700 text-center text-sm text-stone-500">
          <p>&copy; 2024 古民家サウナ 和蒸. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
