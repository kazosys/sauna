export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-800 via-stone-700 to-stone-800">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzQyM2IzMiI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiM1YTUxNDUiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-30"></div>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center px-4">
          <p className="text-amber-200 tracking-[0.3em] text-sm mb-4">KOMINKA SAUNA</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wider">
            古民家サウナ<br className="md:hidden" /> 和蒸
          </h1>
          <p className="text-stone-200 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8">
            築100年の古民家で過ごす、<br />
            心と体を整える極上のサウナ体験
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-sm tracking-wider transition-colors"
          >
            ご予約はこちら
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-700 tracking-[0.2em] text-sm mb-2">CONCEPT</p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">コンセプト</h2>
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-serif text-stone-700 mb-8 leading-relaxed">
              時を超えた空間で、<br />
              本来の自分に還る
            </h3>
            <p className="text-stone-600 leading-loose mb-8">
              「和蒸」は、築100年の歴史を持つ古民家を丁寧に改装し、
              伝統的な日本建築の美しさと本格的なサウナ文化を融合させた空間です。
            </p>
            <p className="text-stone-600 leading-loose mb-8">
              都会の喧騒から離れ、木のぬくもりと薪の香りに包まれながら、
              心身ともに「ととのう」贅沢な時間をお過ごしください。
            </p>
            <p className="text-stone-600 leading-loose">
              季節の移ろいを感じる外気浴、地下100mから汲み上げた天然水の水風呂、
              そして熟練の職人が手がける薪サウナ。<br />
              すべてが調和した空間で、本来の自分に還る体験を。
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-700 tracking-[0.2em] text-sm mb-2">FACILITIES</p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">施設紹介</h2>
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Facility 1: Sauna */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-600 to-stone-800 rounded-sm overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-amber-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7H14C15.1 7 16 7.9 16 9V10C16 11.1 15.1 12 14 12H13V14.27C13.6 14.61 14 15.26 14 16C14 17.1 13.1 18 12 18S10 17.1 10 16C10 15.26 10.4 14.61 11 14.27V12H10C8.9 12 8 11.1 8 10V9C8 7.9 8.9 7 10 7H11V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2M12 20C14.67 20 17.17 20.83 19.24 22.29L18 24H6L4.76 22.29C6.83 20.83 9.33 20 12 20Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-serif text-stone-800 mb-2">薪サウナ</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                フィンランド式の本格薪サウナ。薪の香りとやわらかな熱に包まれ、
                じっくりと体を温めます。セルフロウリュでお好みの蒸気をお楽しみください。
              </p>
            </div>

            {/* Facility 2: Water Bath */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-800 to-blue-950 rounded-sm overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3.25C12 3.25 6 10 6 14C6 17.31 8.69 20 12 20S18 17.31 18 14C18 10 12 3.25 12 3.25M14.47 9.97L15.53 11.03L9.03 17.53L7.97 16.47L14.47 9.97M9.75 10C10.44 10 11 10.56 11 11.25S10.44 12.5 9.75 12.5 8.5 11.94 8.5 11.25 9.06 10 9.75 10M14.25 14.5C14.94 14.5 15.5 15.06 15.5 15.75S14.94 17 14.25 17 13 16.44 13 15.75 13.56 14.5 14.25 14.5Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-serif text-stone-800 mb-2">天然水風呂</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                地下100mから汲み上げた清冽な天然水を使用。
                水温は約15℃に保たれ、サウナで火照った体を心地よく引き締めます。
              </p>
            </div>

            {/* Facility 3: Outdoor */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-700 to-green-900 rounded-sm overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-green-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-serif text-stone-800 mb-2">外気浴スペース</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                四季折々の自然を感じながら、ゆったりとした時間をお過ごしいただけます。
                インフィニティチェアで極上の「ととのい」体験を。
              </p>
            </div>

            {/* Facility 4: Rest Area */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-700 to-amber-900 rounded-sm overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-amber-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12M11,8C10.4,8 10,7.6 10,7C10,6.4 10.4,6 11,6C11.6,6 12,6.4 12,7C12,7.6 11.6,8 11,8Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-serif text-stone-800 mb-2">休憩処</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                古民家の趣を残した休憩スペース。
                お茶やオロポを楽しみながら、ゆっくりとおくつろぎください。
              </p>
            </div>

            {/* Facility 5: Amenities */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-500 to-stone-700 rounded-sm overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-stone-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3H8M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-serif text-stone-800 mb-2">アメニティ</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                タオル・館内着・シャンプー類は無料でご用意。
                サウナハット、サウナマットのレンタルもございます。
              </p>
            </div>

            {/* Facility 6: Private */}
            <div className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-rose-800 to-rose-950 rounded-sm overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-rose-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-serif text-stone-800 mb-2">貸切プラン</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                グループやご家族でのご利用に最適な貸切プランをご用意。
                プライベートな空間でゆったりとお過ごしいただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section id="flow" className="py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-700 tracking-[0.2em] text-sm mb-2">HOW TO USE</p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">ご利用の流れ</h2>
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { step: "01", title: "ご予約", desc: "Webまたはお電話にてご予約ください。" },
                { step: "02", title: "受付・お着替え", desc: "受付後、更衣室にてお着替えいただきます。" },
                { step: "03", title: "かけ湯", desc: "サウナに入る前に、体を軽く洗い流してください。" },
                { step: "04", title: "サウナ", desc: "薪サウナでじっくり体を温めます（8〜12分程度）。" },
                { step: "05", title: "水風呂", desc: "天然水の水風呂で体を冷やします（1〜2分程度）。" },
                { step: "06", title: "外気浴", desc: "外気浴スペースでゆったりと休憩（10分程度）。" },
                { step: "07", title: "繰り返し", desc: "サウナ→水風呂→外気浴を2〜3セット繰り返します。" },
                { step: "08", title: "休憩・退館", desc: "休憩処でおくつろぎいただき、ご退館ください。" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-sm shadow-sm">
                  <span className="text-3xl font-serif text-amber-700">{item.step}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-1">{item.title}</h3>
                    <p className="text-stone-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-700 tracking-[0.2em] text-sm mb-2">PRICE</p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">料金案内</h2>
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Regular Plan */}
            <div className="bg-stone-50 rounded-sm p-8 border border-stone-200">
              <h3 className="text-xl font-serif text-stone-800 mb-4">通常プラン</h3>
              <p className="text-4xl font-bold text-amber-700 mb-2">
                ¥3,500<span className="text-base font-normal text-stone-600">/2時間</span>
              </p>
              <ul className="text-stone-600 text-sm space-y-2 mt-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  タオル・館内着込み
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  シャンプー類完備
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  ドリンク1杯サービス
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  延長30分 ¥1,000
                </li>
              </ul>
            </div>

            {/* Private Plan */}
            <div className="bg-amber-50 rounded-sm p-8 border border-amber-200">
              <h3 className="text-xl font-serif text-stone-800 mb-4">貸切プラン</h3>
              <p className="text-4xl font-bold text-amber-700 mb-2">
                ¥20,000<span className="text-base font-normal text-stone-600">/2時間</span>
              </p>
              <p className="text-stone-600 text-sm mb-4">最大6名様まで</p>
              <ul className="text-stone-600 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  通常プランの内容全て込み
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  プライベート空間を独占
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  サウナハット無料レンタル
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  延長30分 ¥3,000
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-stone-500 text-sm mt-8">
            ※ 価格は全て税込みです。<br />
            ※ ご予約状況により、当日のご利用が難しい場合がございます。
          </p>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-24 bg-stone-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-300 tracking-[0.2em] text-sm mb-2">ACCESS</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">アクセス</h2>
            <div className="w-16 h-0.5 bg-amber-300 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-serif text-amber-100 mb-6">古民家サウナ 和蒸</h3>
              <ul className="space-y-4 text-stone-300">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>〒000-0000<br />○○県○○市○○町1-2-3</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>000-000-0000</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>営業時間: 10:00 - 22:00<br />（最終受付 20:00）</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>定休日: 毎週水曜日</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                  </svg>
                  <span>駐車場: 8台完備（無料）</span>
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="text-amber-100 font-semibold mb-3">アクセス方法</h4>
                <ul className="text-stone-300 text-sm space-y-2">
                  <li>・○○駅より徒歩15分</li>
                  <li>・○○ICより車で10分</li>
                  <li>・○○バス停より徒歩3分</li>
                </ul>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-square bg-stone-700 rounded-sm overflow-hidden flex items-center justify-center">
              <div className="text-center text-stone-400">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                <p className="text-sm">Google Map</p>
                <p className="text-xs mt-1">（実際の地図が表示されます）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-700 tracking-[0.2em] text-sm mb-2">RESERVATION</p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">ご予約・お問い合わせ</h2>
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Phone Reservation */}
              <div className="bg-white rounded-sm p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-stone-800 mb-2">お電話でのご予約</h3>
                <p className="text-2xl font-bold text-amber-700 mb-2">000-000-0000</p>
                <p className="text-stone-500 text-sm">受付時間: 10:00 - 20:00</p>
              </div>

              {/* Online Reservation */}
              <div className="bg-white rounded-sm p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-stone-800 mb-2">Webでのご予約</h3>
                <a
                  href="#"
                  className="inline-block bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-sm tracking-wide transition-colors mt-2"
                >
                  予約サイトへ
                </a>
                <p className="text-stone-500 text-sm mt-4">24時間受付中</p>
              </div>
            </div>

            <div className="bg-white rounded-sm p-8 shadow-sm">
              <h3 className="text-lg font-serif text-stone-800 mb-6 text-center">お問い合わせフォーム</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="090-0000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="ご質問やご要望をお書きください"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-sm tracking-wider transition-colors"
                  >
                    送信する
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-700 tracking-[0.2em] text-sm mb-2">INSTAGRAM</p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">最新情報</h2>
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm overflow-hidden flex items-center justify-center group cursor-pointer"
              >
                <div className="text-stone-400 group-hover:text-stone-500 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
              </svg>
              <span>Instagramをフォローする</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
