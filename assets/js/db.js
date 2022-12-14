document.addEventListener('DOMContentLoaded',getLocalLang)


var arrLang = {
        // TODO:
    'ru': {

      'companyn1' : '"Зехинли Доганлар"',
      'companyn2' : 'хозяйственное общество',
      'home' : 'Главная',
      'about' : 'О нас',
      'services' : 'Услуги',
      'gallery' : 'Галерея',
      'contact' : 'Контакты',
      'russian' : 'Русский',
      'turkmen' : 'Туркменский',
      'english' : 'Английский',
      'active_lang': 'Язык',
      'bitewilik1' : 'Наш девиз:',
      'bitewilik2' : '«целостность & сохранность»',
      'aboutus_title' : 'О нас',
      'about_shortly' : 'Основной деятельностью хозяйственного общество является предоставления охранных услуг, специализирующейся на услугах по физической и пультовой  охране объектов, и их периметра. В перечень услуг компании входят  невооруженная охрана объектов и имущества, обеспечение внутри объектного и пропускного режима на объектах, монтаж и техническое обслуживание охранной и тревожной сигнализации. Компания предоставляет охранные услуги как частным лицам, так и мелким и крупным предприятиям, а так же иностранным компаниям, работающим на территории Туркменистана.',
      'learn_more' : 'Узнать больше',
      'section1p' : '«Зехинли доганлар» - надежный представитель в сфере охранных услуг',
      'kartocka1_f' : 'Невооруженная дневная и ночная охрана',
      'kartocka2_f' : 'Охрана вахтовым методом',
      'kartocka3_f' : 'Обеспечение внутри объектного и пропускного режима',
      'kartocka4_f' : 'Сопровождение грузов и машина сопровождения',
      'kartocka5_f' : 'Монтаж систем объектовой охраны',
      'kartocka6_f' : 'Обслуживание системы объектовой охраны',
      'kartocka1' : 'Данный вид услуги предполагает нахождение двух смен охранников на стационарных постах в течение 12 часов, а также обход и объезд периметра объекта. Допускается применение других режимов работы (7-и,8-и,12-и часовой или др) для охранников в рамках КЗоТ. Обязательным требованием является постоянное присутствие одного охранника на посту.',
      'kartocka2' : 'При применении вахтового метода работы для охранников (12 часовой рабочий день), за сутки на посту будут дежурить 2 охранника, один будет дежурить в дневную смену, а другой в ночную смену. После 15 дневной вахтовой смены на дежурство заступают два новых охранника. Таким образом достигается круглосуточное, постоянное присутствие одного охранника на посту охраны. В общем на таком посту охраны задействовано 4 человека в течении месяца.',
      'kartocka3' : 'Этот вид охранной услуги предполагает оборудование контрольно-пропускного пункта предупредительными знаками и турникетами для осуществления контроля за пропуском людей и транспорта. Здесь предполагается больше охранников, чем в стационарных постах, так как им приходится одновременно выполнят больше объем работы как досмотр транспортных средств, так и большой поток людей.',
      'kartocka4' : 'Данный вид охранной деятельности предполагает обеспечение транспортом, охраной и сопровождение Заказчика в течение 24 часов в сутки. По требованию Заказчика наша компания имеет возможность предоставлять водителей и охранников со знанием иностранных языков.',
      'kartocka5' : 'Данная услуга предполагает по согласованию Заказчика установку охранной сигнализации и системы видеонаблюдения для визуального контроля территории, складов и периметра охраняемого объекта с целью предотвращения незаконных действий со стороны нарушителей.',
      'kartocka6' : 'Данная услуга предполагает техническое обслуживание установленной охранной сигнализации и системы видеонаблюдения для бесперебойной работы установленного оборудования.',
      'why_we' : 'Что Вы получаете, сотрудничая с нами?',
      'ls1' : 'Надежную профессиональную охрану объекта/периметра',
      'ls2' : 'Минимизацию рисков проникновения посторонних лиц на территорию охраняемого объекта',
      'ls3' : 'Сохранность имущества',
      'ls4' : 'Безопасность персонала',
      'ls5' : 'Личную безопасность',
      'ls6' : 'Предотвращение конфликтных ситуаций',
      'ls7' : 'Быструю и профессиональную реакцию во время различных инцидентов',
      'ls8' : 'Подбор, монтаж, настройку и обслуживание комплексных систем безопасности и видеонаблюдения',
      'ls9' : 'Гарантию конфиденциальности',
      'ls10' : 'Законные действия в области защиты имущества Заказчика',
      'ls11' : 'Постоянный контроль качества работы каждого сотрудника',
      'ls12' : 'Круглосуточную поддержку',
      'ls13' : 'Спокойную жизнь и возможность сконцентрировать силы на своих целях, не беспокоясь о безопасности',
      'summary' : 'Охранная компания «Зехинли доганлар» - это разумный выбор для защиты любого объекта. Мы являемся признанным лидером в области безопасности, поддерживая охранные стандарты и обеспечивая сохранность всего, за что отвечаем. ',
      'section2h3' : 'Сосредоточьтесь на важном для вас,',
      'section2h32' : 'а мы позаботимся о вашей безопасности!',
      'section3h3' : 'Обращаясь к ЧОП «Зехинли доганлар»',
      'section3p' : 'Вы сохраните свое имущество в целостности и сохранности!',
      'how_we_work' : 'КАК МЫ РАБОТАЕМ',
      'contract' : 'Договор',
      'information' : 'Информация',
      'analysis' : 'Анализ',
      'mount' : 'Монтаж',
      'guard' : 'Защита',
      'ct1' : 'Заключение двухсторонних контрактов на основе взаимных договоренностей',
      'ct2' : 'Защита объекта зависит от степени его уязвимости, расположения, площади и прочих характеристик',
      'ct3' : 'Проведение тщательной проверки и анализа объекта для предоставления индивидуального комплекса мер по безопасности объекта',
      'ct4' : 'После согласования с Заказчиком происходит монтаж необходимого оборудования',
      'ct5' : 'Гарантирование высокого качества предоставляемых услуг и оперативное реагирование и четкость действий сотрудников даже в самой нестандартной ситуации',
      'contact_us' : 'Связаться с нами',
      'phone_number' : 'Номер телефона',
      'faxno' : 'факс',
      'adres1' : 'юридический Адрес',
      'adres1desc' : '745110, Туркменистан, Балкан велаят, г.Гумдаг, комплекса жилых домов 15, Дом 88.',
      'adres2' : 'фактический адрес',
      'adres2desc' : '745000, Туркменистан, Балкан велаят, г.Туркменбаши, торговый центр «Шагадам», кабинет №: 31',
      'send_message' : 'Отправить сообщение',

      // ABOUT.HTML SAHYPASYNDAKYLAR
      // TODO:


      'about_p1' : 'Частное охранное предприятие «Зехинли доганлар» основано в 22-го июня 2016 года и перерегистрировано 29-го  мая 2020 года как хозяйственное общество, чтобы приобрести дополнительные коды по ГКВЭД. Предприятие действует на основании Единого государственного реестра № 24594443 от 29-го мая 2020 года и Устава предприятия, выданного Министерством Экономики и Развития Туркменистана.',
      'about_p2' : 'Основной деятельностью хозяйственного общество является предоставления охранных услуг, специализирующейся на услугах по физической и пультовой  охране объектов, и их периметра. В перечень услуг компании входят  невооруженная охрана объектов и имущества, обеспечение внутри объектного и пропускного режима на объектах, монтаж и техническое обслуживание охранной и тревожной сигнализации. Компания предоставляет охранные услуги как частным лицам, так и мелким и крупным предприятиям, а так же иностранным компаниям, работающим на территории Туркменистана.',
      'about_p3' : 'Свою охранную деятельность хозяйственное общество «Зехинли доганлар» осуществляет по единому ГКВЭД (Государственный классификатор видов экономической деятельности), введенному 01.01.2014 года, раздел 80, группа 80.1, класс 80.10, который включает в себя деятельность охранников, сторожей, вахтеров, караульных служб и группа 80.2, класс 80.20, включающий в себя обеспечение функционирования систем безопасности.',
      'about_p4' : 'Хозяйственное общество «Зехинли доганлар» имеет все необходимые нормативные документы и ресурсы для выполнения охранных услуг, в том числе транспорт и СИЗ для охранников. Компания предоставляет квалифицированных охранников с опытом работы, которые работают круглосуточно в течение 7 (семи) дней в неделю. Охранные услуги осуществляются 24 часа в сутки.',
      'about_p5' : 'Также предприятие освобождает Заказчика от всяких видов рисков, касающихся здоровья работников охраны, травматизма на рабочем месте и др. так как работники застрахованы против возможных рисков травматизма на рабочем месте.',
      'about_p6' : 'С июля 2016 года до июля 2022 года наше предприятие оказывало охранные услуги южнокорейской компании «HYUNDAI ENGINEERING Co. LTD» по проекту TACE - строительство завода по производству полиэтилена и полипропилена с установкой крекинга этана, на территории поселка Киянлы, Туркменбашинского этрапа  и проекту TORE – проектирование, закупка и строительство установок вакуумной перегонки мазута, алкилирование легких олефинов, смешивание бензинов, расположенных на территории Туркменбашинского КНПЗ, вахтового городка в г. Туркменбаши Балканского велаята Туркменистана.',
      'about_p7' : 'Хозяйственное общество «Зехинли доганлар» активно участвует в тендерах, проводимых иностранными компаниями таких как CNPC International (T-n), ENI (T-n), Petronas Çarigali (T-n), работающих на основании договора  по распределению продукции и Закона Туркменистана «Об углеводородных ресурсах», а так же южнокорейской компании «Hyundai Engineering Co. Ltd».',
      'about_p8' : 'Цель компании соответствует его девизу «Целостность и сохранность», так как основной задачей является принятие оперативных мер по предотвращению несанкционированных проникновений, а так же обеспечения целостности и сохранности имущества охраняемого объекта.',
      'about_p9' : 'Обратитесь к нам и Вы сохраните свое имущество в целостности и сохранности!',
      'diversifikasiya_title' : 'ДИВЕРСИФИКАЦИЯ ПРЕДПРИЯТИЯ',
      'diversifikasiya_text' : 'С целью диверсификации деятельности хозяйственного общества в 2020 году была налажена работа по техническому обслуживанию автомобилей и предоставления услуг по общественному питанию, а также в январе 2021 года был заключен контракт с Агентством Государственной рыбоохраны и контролю за водными биоресурсами Туркменистана по добыче рыбы и биоресурсов  на Туркменской части акватории Каспийского моря. Кроме этого предприятие держит торговые отношения с такими странами как ОАЭ, Китай, Турция, Россия, Азербайджан и Казахстан.',
      'autoservice' : 'АВТОСЕРВИС и кафе',
      'fishing' : 'рыболовство',
      'our_clients' : 'НАШИ ЗАРУБЕЖНЫЕ ТОРГОВЫЕ ПРЕДСТАВИТЕЛИ',
      'charity_title' : 'БЛАГОТВОРИТЕЛЬНОСТЬ',
      'charity_h3' : '«Добрые дела дают силы нам самим и побуждают к добрым поступкам других»',
      'charity_1' : 'Хозяйственное общество «Зехинли доганлар» начиная с 2019 года занимается благотворительной деятельностью. Первый шаг был сделан в апреле 2019 года путем внесения денежных средств на строительство главной мечети Балканского велаята в городе Балканабат',
      'charity_2' : 'Для обеспечения восстановительного лечения инвалидов с детства и инвалидов-спортсменов нами была оказана финансовая помощь Реабилитационному Центру инвалидов Туркменистана в г. Ашгабат',
      'charity_3' : 'С целью приобретения спортивной экипировки, спортивного инвентаря для проведения предстоящих чемпионатов по видам спорта, где принимают участие люди с синдромом Дауна и инвалиды по интеллекту были переданы денежные средства Национальному Центру Специальной  Олимпиады Туркменистана (НЦСОТ)',
      'charity_4' : 'Для улучшения условий содержания детей инвалидов и организации поездок по святым местам, а также отдыха в оздоровительных центрах нами была оказана финансовая поддержка Общества слепых и глухих  в г. Балканабат  Балканского велаята',
      'charity_5' : 'Нами была проведена финансовая поддержка Предпринимателя Х. Годанова, который по просьбе местного населения создал историко-краеведческого музей в г. Этрек Этрекского этрапа Балканского велаята',
      'charity_6' : 'В связи с проведением дня инвалидов и людей с ограниченными возможностями, а так же содействие в улучшении оказываемых услуг со стороны Общества Инвалидов Туркменистана нами была предоставлена финансовая помощь',
      'charity_end' : 'Хозяйственное общество «Зехинли доганлар» планирует продолжить благотворительную деятельность, так как лучший способ сохранить память о добрых делах-повторять их',

      // Services.html SAHYPASYNDAKYLAR
            // TODO:

      'services_h3' : 'Выполнять условия договора – это одно, быть вместе с клиентом и слышать его – идея хорошего ведения бизнеса.',
      'services_1' : 'ЧОП «Зехинли доганлар» предлагает полный спектр разрешенных законом охранных и иных услуг в сфере безопасности и охраны.',
      'services_p1' : 'Конкурентным преимуществом нашей компании являться широкий спектр услуг, включая услуги как физической, так и пультовой охраны. В связи с этим компания предоставляет следующие виды охранных услуг:',
      'usluga1' : 'Услуги физической охраны объектов -',
      'usluga1.1' : 'комплекс мер, направленных на обеспечение безопасности функционирования объекта, сохранности его материального имущества, защиту жизни и здоровья его персонала. В задачу физической охраны входит контроль пропускного режима, досмотр автотранспорта, предотвращение краж и хищений, обход объекта и прилегающей территории, мониторинг системы видеонаблюдения, контроль действий посетителей и сотрудников предприятия, охрана материальных ценностей, находящихся в свободном доступе, принятие первичных мер по устранению технических аварий и возгораний, предотвращение несанкционированного доступа и повышение, и поддержание высокого статуса объекта/ предприятия.',

      'usluga2' : 'Услуги пультовой охраны -',
      'usluga2.1' : 'это комплекс электронных систем, позволяющих обеспечивать безопасность объекта с помощью круглосуточной передачи данных, поступающих по защищенным каналам связи на пульт мониторингового центра. Современные системы охраны значительно уменьшают риски незаконного  проникновения на территорию, позволяют оперативно принять меры по расследованию происшествия, если оно все же произошло. Если на объекте произошла чрезвычайная ситуация, система мгновенно оповещает об этом охрану. К тревожным ситуациям относят попытку взлома, незаконного проникновения, кражу имущества и подобные деяния.',
      
      'usluga3' : 'Услуги по сопровождению грузов -',
      'usluga3.1' : 'под сопровождением грузовых перевозок понимают не только непосредственное присутствие охраны на всем пути транспортировки, но и целый комплекс предварительной подготовки и превентивных мер безопасности. В услуги по сопровождению грузов входит подготовительный этап – оптимальный выбор транспорта для перевозки, правильная загрузка с соблюдением мер безопасности, оборудование транспорта аппаратурой слежения, разработка оптимального и максимально безопасного маршрута к пункту назначения с учетом особенностей местности и других важных нюансов, предварительная разведка территории на наличие опасных факторов, организация безопасных методов получения, отправки и выдачи груза, составление расписания остановок для отдыха, дозаправки с отметками медицинских, контрольно-пропускных пунктов, точный расчет времени прибытия груза, физическое сопровождения груза специальными агентами службы.',
      
      'uslugap4' : 'Правильная организация перевозки ценных грузов при наличии охранного комплекса, гарантирует заказчику 100% целостность и сохранность груза.',
      'uslugap5' : 'Мы адаптируем наши услуги под индивидуальные потребности каждого Заказчика. Обеспечиваем надежное сотрудничество на основе заключения официальных договоров  с гибким и лояльным ценообразованием.',
      

      'No' : '№',
      'table_name' : 'Наименование',
      'table_desc' : 'Описание',
      'table_price' : 'Стоимость',
      'table1' : 'Услуги физической охраны объектов',
      'rc1' : 'Невооруженная охрана дневная',
      'rc2' : 'Дневная охрана без оружия (минимальный заказ – 12 часов)',
      'rc3' : 'договорная',
      'r2c1' : 'Невооруженная охрана ночная',
      'r2c2' : 'Ночная охрана без оружия (минимальный заказ – 12 часов)',
      'r3c1' : 'Охрана вахтовым методом',
      'r3c2' : 'Охрана вахтовым методом',
      'r4c1' : 'Обеспечение внутри объектного и пропускного режимов',
      'r4c2' : 'Обеспечение внутри объектного и пропускного режимов',
      'table2' : 'Услуги по сопровождению грузов',
      'r5c1' : 'Сопровождение грузов',
      'r5c2' : 'Сопровождение грузов охранником',
      'r6c1' : 'Машина сопровождения',
      'r6c2' : 'Машина сопровождения (2 охранника)',
      'table3' : 'Услуги пультовой охраны',
      'r7c1' : 'Монтаж системы объектовой охраны',
      'r7c2' : 'Монтаж системы объектовой охраны малой, средней, большой емкости',
      'r8c1' : 'Обслуживание системы объектовой охраны',
      'r8c2' : 'Техническое обслуживание систем объектовой охраны малой, средней, большой емкости',
      'aftertable' : 'Наша основная задача предоставлять безупречные услуги охраны, которые превосходят ожидания и потребности наших клиентов, в основе которых лежат честность и профессионализм. Наша работа направлена на разработку уникальных решений для безопасности наших клиентов, которые соответствует реалиям сегодняшнего дня.',
      'you_get' : 'НАШ УСПЕХ – ВАША БЕЗОПАСНОСТЬ',
      'services_end' : 'С июля 2016 года до июля 2022 года наше предприятие оказывало охранные услуги южнокорейской компании «HYUNDAI ENGINEERING Co. LTD» по проекту TACE - строительство завода по производству полиэтилена и полипропилена с установкой крекинга этана, на территории поселка Киянлы, Туркменбашинского этрапа  и проекту TORE – проектирование, закупка и строительство установок вакуумной перегонки мазута, алкилирование легких олефинов, смешивание бензинов, расположенных на территории Туркменбашинского КНПЗ, вахтового городка в г. Туркменбаши Балканского велаята Туркменистана.',

// Gallery page
      // TODO:
      'gal1' : 'Работа на КПП',
      'gal2' : 'Осмотр въезжающего транспорта',
      'gal3' : 'Осмотр выезжающего транспорта',
      'gal4' : 'Осмотр периметра Объекта',
      'gal5' : 'Обеспечение внутри объектного и пропускного режима',
      'gal6' : 'Санитарно-медицинский контроль',
      'gal7' : 'Контроль пультовой охраны',
      'gal8' : 'Контрольно-пропускной режим на КПП',
      'gal9' : 'Проверка ручной клади',
      'gal10' : 'Осмотр большегрузных машин',
      'gal11' : 'Контроль пропускного режима',
      'gal12' : 'Контроль за проходящими через турникет',
      'gal13' : 'Состав сотрудников 1-ой смены',
      'gal14' : 'Состав сотрудников 2-ой смены',

    },

      // TODO:
    'tm': {

      'companyn1' : 'Zehinli Doganlar',
      'companyn2' : 'Hojalyk jemgyýeti',
      'home' : 'Baş sahypa',
      'about' : 'Biz barada',
      'services' : 'Hyzmatlar',
      'gallery' : 'Galereýa',
      'contact' : 'Habarlaşmak üçin',
      'russian' : 'Rusça',
      'turkmen' : 'Türkmençe',
      'english' : 'Iňlisçe',
      'active_lang' : 'Dil',
      'bitewilik1' : 'Biziň şygarymyz:',
      'bitewilik2' : '«bitewilik & abatlyk»',
      'aboutus_title' : 'Biz barada',
      'about_shortly' : 'Hojalyk jemgyýetiniň esasy işi stasionar desgalary (obýektleri) we olaryň töweregini (perimetrini) ýaragsyz fiziki we wideogözegçilik usullary arkaly ýöriteleşdirilen gorag hyzmatlary bilen üpjin etmeklikdir.  Hojalyk jemgyýetiniň hyzmatlarynyň sanawyna obýektleriň we emlägiň ýaragsyz goragy, obýektleriň içindäki üpjünçilik, obýektlere giriş gözegçiligi, howpsuzlyk hem-de duýduryş ulgamlaryny gurnamak, şeýle-de olara tehniki hyzmatlar etmeklik girýär. Hojalyk jemgyýeti  şahsyýetlere, kiçi we iri kärhanalara, şeýle hem Türkmenistanyň çäginde işleýän daşary ýurt kompaniýalaryna gorag hyzmatlaryny hödürleýär.',
      'learn_more' : 'Giňişleýin öwrenmek üçin',
      'section1p' : '“Zehinli doganlar” - gorag hyzmatlary babatynda ygtybarly wekil',
      'kartocka1_f' : 'Ýaragsyz gije-gündiz gorag',
      'kartocka2_f' : 'Çalşyk esasynda gorag',
      'kartocka3_f' : 'Obýektiň içindäki gorag we giriş-çykyş nokadynyň gözegçiligini üpjün etmek',
      'kartocka4_f' : 'Ýük we ulag ugratmak',
      'kartocka5_f' : 'Obýektiň gorag ulgamlaryny gurnamak',
      'kartocka6_f' : 'Desganyň gorag ulgamyna hyzmat etmek',
      'kartocka1' : 'Hyzmatyň bu görnüşi 12 sagat stasionar postlarda iki sany goragçynyň bolmagyny, şeýle hem desganyň perimetrinden aýlanmagyny we gözegçiligini öz içine alýar. Türkmenistanyň Zähmet Kodeksiniň çäginde goragçylar üçin beýleki iş gün tertibini (7, 8 we 12 sagat ýa-da beýlekiler) ulanmaga rugsat berilýär. Hökmany talap - gorag nokadynda bir işgäriň hemişe bolmagydyr.',
      'kartocka2' : 'Goragçylar üçin çalşyk iş usuly (12 sagat iş güni) ulanylanda, her gün 2 sany goragçynyň biri gündizki çalşykda, beýlekisi bolsa gijeki gorag nokadynda bolýar. 15 günlük çalşykdan soň, iki sany täze goragçy işe çykýar. Şeýlelik bilen, gije-gündiziň dowamynda işgärler tarapyndan gorag nokadynda mydama bir goragçynyň bolmagy gazanylýar. Umuman aýdylanda, bir aýyň dowamynda şeýle iş usulynda bir gorag nokady üçin 4 goragçy işe çekilýär.',
      'kartocka3' : 'Gorag hyzmatynyň bu görnüşi desgada (obýektde) giriş-çykyş nokadyny adamlaryň we ulaglaryň geçişine gözegçilik etmeklik üçin duýduryş belgileri hem-de turniketler bilen enjamlaşdyrmagy öz içine alýar. Bu ýerde stasionar postlara garanyňda has köp goragçylary işe çekmeklik göz öňünde tutulýar. Sebäbi şol bir wagtyň özünde goragçylar tarapyndan köp ulag serişdeleriniň we adamlar akymynyň barlagy  ýerine ýetirilmeli bolýar.',
      'kartocka4' : 'Gorag işiniň bu görnüşi müşderini we onuň ýüküni gije-gündiziň  (24 sagadyň dowamynda) ulag, gorag we goragçylar bilen üpjin etmekligi öz içine alýar. Müşderiniň talaby  boýunça, kompaniýamyzyň daşary ýurt dillerini bilýän sürüjiler we gorag işgärleri bilen üpjün etmäge mümkinçiligi bar.',
      'kartocka5' : 'Bu hyzmat müşderiniň razyçylygy bilen, goralýan desganyň çäginde, ammarlarynda we perimetrinde bikanun hereketleriň öňüni almaklyk maksady bilen wizual gözegçilik etmek üçin signal berýän enjamlary hem-de wideo gözegçilik ulgamyny gurnamagy öz içine alýar.',
      'kartocka6' : 'Bu hyzmat, gurnalan signal beriji enjamlarynyň we wideo gözegçilik ulgamynyň bökdençsiz işlemegi üçin, olara tehniki taýdan hyzmat etmekligi özünde jemleýär.',
      'why_we' : 'Biz bilen hyzmatdaşlykda Siz näme gazanaýarsyňyz?',
      'ls1' : 'Obýektiň / perimetriň ygtybarly professional goragy',
      'ls2' : 'Goralýan desganyň çägine keseki adamlaryň rugsatsyz girmek howpuny azaltmak',
      'ls3' : 'Emläk abatlygy',
      'ls4' : 'Işgärleriň howpsuzlygy',
      'ls5' : 'Şahsy howpsuzlyk',
      'ls6' : 'Dawa-jenjelli ýagdaýlaryň öňüni almak',
      'ls7' : 'Dürli hadysalarda çalt we professional garaýyş',
      'ls8' : 'Toplumlaýyn howpsuzlyk we wideo gözegçilik ulgamlaryny saýlamak, gurnamak we olara hyzmat etmek',
      'ls9' : 'Gizlinlik kepillendirilmesi',
      'ls10' : 'Müşderiniň emlägini goramak ugrundaky hukuk çäreleri',
      'ls11' : 'Her bir goragçynyň işine yzygiderli hil gözegçiligi',
      'ls12' : 'Gije-gündiz goldaw',
      'ls13' : 'Rahat durmuş we howpsuzlyk barada alada etmän, ähli güýjiňi öz maksatlaryňyz üçin jemlemeklik mümkinçiligi',
      // 'summary' : '“Zehinli doganlar” - gorag hyzmatlary babatynda ygtybarly wekil.',
      'summary' : '“Zehinli doganlar” gorag kompaniýasy - islendik Desganyň goragy üçin pähimli saýlaw! Biz - gorag standartlaryny goldamak we jogap berýän ähli zatlarymyzyň abatlygyny üpjin etmeklik bilen, howpsuzlyk ugrunda liderdiris!.',

      'section2h3' : 'Özüňiz üçin möhüm bolan zatlara üns beriň,',
      'section2h32' : 'biz bolsa siziň howpsuzlygyňyzy alada ederis!',
      'section3h3' : 'Bize ýüzlenmeklik bilen',
      'section3p' : 'Siz emlägiňizi bitewi we abat saklarsyňyz',
      'how_we_work' : 'Biz nähili işleýäris',
      'contract' : 'Şertnama',
      'information' : 'Maglumat',
      'analysis' : 'Seljeriş',
      'mount' : 'Montaž',
      'guard' : 'Gorag',
      'ct1' : 'Özara ylalaşyga esaslanýan ikitaraplaýyn şertnamalaryň baglaşylmagy',
      'ct2' : 'Obýektiň –  desganyň gowşaklygynyň derejesine, ýerleşişine, meýdanyna we beýleki aýratynlyklaryna baglylykda goralmagy',
      'ct3' : 'Her bir obýektiň howpsuzlygyny aýratyn-özbaşdak çäreler toplumy bilen üpjün etmeklik üçin, desgany düýpli gözden geçirmek we seljermek',
      'ct4' : 'Müşderi bilen ylalaşykdan soň, desgada zerur enjamlaryň gurnalmagy',
      'ct5' : 'Berilýän hyzmatlaryň ýokary hilini kepillendirmek we iň adaty bolmadyk ýagdaýlarda hem goragçylaryň gyssagly jogap bermegini we sazlaşykly hereketleriniň aýdyňlygyny üpjün etmek',
      'contact_us' : 'Habarlaşmak üçin',
      'phone_number' : 'Telefon belgimiz',
      'faxno' : 'Faks',
      'adres1' : 'Ýuridiki salgymyz',
      'adres1desc' : '745110, Türkmenistan, Balkan welaýatynyň Gumdag şäheriniň 15-nji ýaşaýyş jaýlar toplumynyň 88-njy jaýy.',
      'adres2' : 'Hakyky salgymyz',
      'adres2desc' : '745000, Türkmenistan, Balkan welaýatynyň Türkmenbaşy şäheriniň Balkan köçesiniň 10-njy jaýy “Şagadam” söwda merkeziniň 31-nji otagy',
      'send_message' : 'Hat iberiň',

      // ABOUT.HTML SAHYPASYNDAKYLAR
      // TODO:

      'about_p1' : '"Zehinli doganlar" hususy gorag kärhanasy 2016-njy ýylyň 22-nji iýunynda döredildi we YIGDK (ykdysady işleriň görnüşleriniň döwlet klassifikatory) görä goşmaça kodlar almak üçin 2020-nji ýylyň 29-njy maýynda hojalyk jemgyýeti hökmünde gaýtadan hasaba alyndy. Kärhana 2020-nji ýylyň 29-njy maýynda çykarylan 24594443 belgili Döwlet sanawy we Türkmenistanyň Ykdysadyýet we Ösüş ministrligi tarapyndan berlen kärhananyň Tertipnamasy esasynda hereket edýär.',
      'about_p2' : 'Hojalyk jemgyýetiniň esasy işi stasionar desgalary (obýektleri) we olaryň töweregini (perimetrini) ýaragsyz fiziki we wideogözegçilik usullary arkaly ýöriteleşdirilen gorag hyzmatlary bilen üpjin etmeklikdir.  Hojalyk jemgyýetiniň hyzmatlarynyň sanawyna obýektleriň we emlägiň ýaragsyz goragy, obýektleriň içindäki üpjünçilik, obýektlere giriş gözegçiligi, howpsuzlyk hem-de duýduryş ulgamlaryny gurnamak, şeýle-de olara tehniki hyzmatlar etmeklik girýär. Hojalyk jemgyýeti  şahsyýetlere, kiçi we iri kärhanalara, şeýle hem Türkmenistanyň çäginde işleýän daşary ýurt kompaniýalaryna gorag hyzmatlaryny hödürleýär.',
      'about_p3' : '"Zehinli doganlar" hojalyk jemgyýeti howpsuzlyk çärelerini YIGDK-nyň (ykdysady işleriň görnüşleriniň döwlet klassifikatory) bölümüne 01.01.2014 ý. senesindäki girizilen garawullaryň, gözegçileriň işini öz içine alýan 80-nji bölüm, 80.1-nji topar, 80.10-njy synpyna we howpsuzlyk ulgamlarynyň işlemegini üpjün edýän 80.2 topar, 80.20 synpyna laýyklykda amala aşyrýar.',
      'about_p4' : '“Zehinli doganlar” hojalyk jemgyýeti howpsuzlyk gullukçylary üçin ulag we ŞGS (şahsy gorag serişdeleri) ýaly gorag hyzmatlaryny ýerine ýetirmek üçin ähli zerur enjamlara, kadalaşdyryjy resminamalara we çeşmelere eýedir. Kärhana Potratçyny hünärli goragçylary bilen hepdede 7 (ýedi) gün, ýagny gije-gündiziň dowamynda işleýän tertipde  üpjün edýär. Gorag hyzmatlary günde 24 sagadyň dowamynda berilýär.',
      'about_p5' : 'Mundan başga-da, “Zehinli doganlar” HJ Müşderini gorag işgärleriniň saglygy, iş ýerindäki şikesler we ş.m. bilen baglanyşykly her dürli töwekgelçiliklerden boşadýar. Sebäbi kärhananyň işgärleri önümçilikde betbagtçylykly hadysalardan we hünär kesellerine garşy Türkmenistanyň Döwlet Ätiýaçlandyryş Guramasy tarapyndan ätiýaçlandyrylan.',
      'about_p6' : '2016-njy ýylyň iýulyndan 2022-nji ýylyň iýulyna çenli kompaniýamyz Günorta Koreýanyň «Hyundai Engineering Co. Ltd» kompaniýasynyň TACE proýekti boýunça Türkmenbaşy etrabynyň Gyýanly şäherçesiniň çäginde ýerleşýän Polimer zawodyň gurluşygy  şeýle hem Balkan welaýatynyň Türkmenbaşy şäherindäki TNGIZT-da TORE proýekti, ýagny mazut ýagynyň wakum distilýasiýasy, ýeňil olefinleriň alkilýasiýasy we benziniň garyndysy boýunça taslamalaryny gorag hyzmatlary bilen üpjin etdi.',
      'about_p7' : '«Zehinli doganlar» hojalyk jemgyýeti Türkmenistanyň «Uglewodorod serişdeleri baradaky» Kanuny esasynda önümleri paýlamak boýunça iş alyp barýan CNPC International (T-n), ENI (T-n), Petronas Çarigali (T-n) şeýle hem Günorta Koreýanyň «Hyundai Engineering Co.ltd» ýaly daşary ýurt kompaniýalary tarapyndan geçirilýän tenderlere işjeň gatnaşýar.',
      'about_p8' : 'Kompaniýanyň "bitewilik we abatlyk" şygaryna laýyk gelýän esasy maksady we wezipesi goralýan obýeklere birugsat girmegiň öňüni almak, şeýle hem goralýan obýektleriň emläkleriniň bitewiliginiň we howpsuzlygynyň üpjünçiligini gazanmaklykdyr.',
      'about_p9' : '',
      'diversifikasiya_title' : 'KÄRHANANYŇ DIWERSIFIKASIÝASY',
      'diversifikasiya_text' : 'Hojalyk jemgyýetiň işini diwersifikasiýa ýoly bilen ösdürmeklik maksady bilen 2020-nji ýylda awtoulaglara hyzmat etmek we naharhana hyzmatlaryny bermek boýunça işler ýola goýuldy. 2021-nji ýylyň ýanwar aýynda Hazar deňziniň kenarýaka suwlarynda suwuň bioserişdelerini peýdalanmak barada Türkmenistanyň Maliýe we ykdysadyýet ministrliginiň ýanyndaky Ykdysadyýeti töwekgelçiliklerden goramak Agentliginiň Döwlet balyk goraýyş we suwuň bioserişdelerine gözegçilik Müdürligi bilen Şertnama baglanyşyldy. Mundan başga-da kompaniýa Birleşen Arap Emirlikleri, Hytaý, Türkiýe, Russiýa, Azerbaýjan we Gazagystan ýaly ýurtlar bilen söwda gatnaşyklaryny dowam etdirýär.',
      'autoservice' : 'Awtoserwis we kafe',
      'fishing' : 'balyk tutmaklyk işi',
      'our_clients' : 'Biziň bilen hyzmatdaşlyk edýän daşary ýurtly söwda wekilleri',
      'charity_title' : 'HAÝYR-SAHAWAT IŞLERI',
      'charity_h3' : '«Ýagşylyk etmeklik biziň özümize güýç berýär we beýlekileri ýagşylyk etmäge iterýär»',
      'charity_1' : '«Zehinli doganlar» hojalyk jemgyýeti 2019-njy ýyldan bäri haýyr-sahawat işleri bilen meşgullanýar. Ilkinji ädim 2019-njy ýylyň aprelinde Balkanabat şäherindäki Balkan welaýat baş metjidiniň gurluşygyna pul serişdesini geçirmek bilen başlandy',
      'charity_2' : 'Türkmenistanyň Aşgabat şäherindäki maýyplary goldamak Merkezinde dikeldiş-reabilitasiýa bejergisini bermek üçin maliýe goşandy',
      'charity_3' : 'Türkmenistanyň Ýörite Olimpiýa Milli Merkezine (TÝOMM)  Down sindromly we akyl taýdan kem adamlaryň sportyň görnüşleri boýunça geçirilýän çempionatlara gatnaşmaklygy üçin, sport enjamlaryny we esbaplaryny satyn almaklyga geçirilýän maliýe kömegi',
      'charity_4' : 'Balkan welaýatynyň Balkanabat şäherindäki körler we kerler jemgyýetine maýyp çagalaryň ýaşaýyş şertlerini gowulandyrmak üçin geçirilýän maliýe goşandy ',
      'charity_5' : 'Balkan welaýatynyň Etrek etrabynyň  ýaşaýjysy we telekeçi H. Godanowa  ýerli halkyň haýyşy boýunça, Etrek şäherinde taryhy – ülkäni öwreniş muzeýini döretmekde berilen maliýe kömegi',
      'charity_6' : 'Ýurtda mümkinçiligi çäkli we maýyplar gününiň geçirilmegi sebäpli hem-de maýyplara edilýän hyzmatlaryň hilini gowlandyrmaklyk üçin biz tarapdan Türkmenistanyň Maýyplar Jemgyýetine geçirilýän maliýe kömegi',
      'charity_end' : '«Zehinli doganlar» hojalyk jemgyýeti haýyr-sahawat işlerini mundan beýläkde dowam etdirmegi meýilleşdirýär, sebäbi ýagşy amallary ýatda saklamagyň iň gowy usuly - olary gaýtalamakdyr ',


      // Services.html SAHYPASYNDAKYLAR
            // TODO:

      'services_h3' : 'Baglanyşylan şertnamanyň şertlerini ýerine ýetirmeklik – bir zat, müşderi bilen bile bolup ony eşitmeklik – işi ýöretmekligiň iň oňat taglymatydyr.',
      'services_1' : '“Zehinli doganlar” hojalyk jemgyýeti kanun tarapyndan rugsat edilen gorag we beýleki hyzmatlaryň howpsuzlyk çygryndaky doly spektrni hödürleýär.',
      'services_p1' : 'Kompaniýamyzyň bäsdeşlik artykmaçlygy - fiziki we wideogözegçilik gorag hyzmatlaryny öz içine alýan hyzmatlaryň giň toplumydyr. Şunuň bilen baglylykda kompaniýamyz hyzmatlaryň aşakdaky görnüşlerini hödürleýär:',
      
      
      'usluga1' : 'Obýektleri fiziki taýdan goramak hyzmatlary -',
      'usluga1.1' : 'obýektiň işleýşiniň howpsuzlygyny, maddy emläginiň howpsuzlygyny, işgärleriniň ömrüni we saglygyny goramaga gönükdirilen çäreler toplumy bolup durýar. Fiziki taýdan goramagyň wezipesi  giriş-çykyş nokadyny gözegçilikde saklamak, ulaglary barlamak, desganyň çägindäki aýlawly ýollardan girmegiň, ýitgileriň we ogurlygyň öňüni almak, wideo gözegçilik ulgamyna gözegçilik etmek, obýekte gelýän myhmanlarynyň we işgärleriniň hereketlerine gözegçilik etmek, elýeter ýerlerde saklanýan maddy gymmatlyklary goramak, tehniki betbagtçylyklary we ýangynlary ýok etmeklik üçin ilkinji çäreleri görmek, birugsat girmegiň öňüni almak we goralýan desganyň/obýektiň işjeňligini ösdürmek we goldamak ýaly çäreleri öz içine alýar.',

      'usluga2' : 'Wideogözegçilik gorag hyzmatlary -',
      'usluga2.1' : 'bu öýjükli ulgam toplumy bolup, goralýan desganyň/obýektiň howpsuzlygyny birkemsiz üpjin etmeklik üçin ygtybarly aragatnaşyk kanallary arkaly alynýan maglumatlary gije-gündiziň dowamynda monitoring merkeziniň pultuna bermeklikdir.  Döwrebap howpsuzlyk ulgamlary goralýan desganyň/obýektiň çägine  bikanun girmek howpuny ep-esli azaldýar, eger-de bu waka ýüze çykaýan halatynda, derňemek üçin tiz-dessin çäreleri görmäge mümkinçilik berýär. Desgada/obýektde adatdan daşary ýagdaý ýüze çykan halatynda, ulgam derrew goragçylara habar berýär. Duýduryşly ýagdaýlara - ogurlyga synanyşmak, bikanun girmek, emläk ogurlamak we şuňa meňzeş hereketler girýär.',
      
      'usluga3' : 'Ýükleri ugratmak hyzmatlary -',
      'usluga3.1' : 'ýükleri daşamaklyk, munyň özi diňe bir  ähli ulag ýollary boýunça goragçylaryň gönüden-göni bolmagy däl-de, eýsem deslapky taýýarlyk we öňüni alyş howpsuzlyk çäreleriniň toplumyny hem aňladýar. Ýükleri ugratmak hyzmatlarynyň taýýarlyk tapgyry – ýükleri daşamaklyk üçin iň amatly ulaglaryň saýlanylmagy, ýükleriň howpsuzlyk çärelerine laýyk ýüklenilmegi, ulaglarda yzarlaýyş enjamlaryň oturdylmagy, ýükiň barmaly ýerine çenli iň amatly we iň howpsyz ýoluny (marşrutyny) işläp düzmeklik üçin sebitiň aýratynlyklarynyň we beýleki möhüm aýratynlyklaryň (nuanslaryň) göz öňine tutulmagy, ugradylýan ýükleriň geçýän çäklerinde howply faktorlaryň barlygyny anyklamaklyk üçin deslapky barlag çäreleriniň geçirilmegi, ýükleri kabul etmegiň, ibermegiň we tabşyrmagyň ygtybarly usullarynyň gurnalmagy, ýollarda dynç alyş duralgalarynyň meýilleşdirilmegi, awtoulaglara ýangyç guýyş nokatlarynda ulaglara ýangyjyň guýulmasy, lukmançylyk bellikleriň amala aşyrylmasy, ýükleriň gelen wagtynyň takyk hasaplanmasy, ýükleriň gorag gullugynyň wekilleri tarapyndan ugradylmagyny öz içine alýar.',
      
      'uslugap4' : 'Gorag toplumy esasynda gymmat bahaly harytlaryň daşalmagyny dogry gurnamak - munyň özi  Müşderä ýüküň 100% bitewiligini we abatlygyny kepillendirilýär.',
      'uslugap5' : 'Biz hyzmatlarymyzy her bir Müşderiniň aýratyn zerurlyklaryna görä uýgunlaşdyryp, çeýe we ygrarly nyrh bilen resmi şertnamalaryň baglaşylmagynyň esasynda ygtybarly hyzmatdaşlygy üpjün edýäris.',
      

      'No' : '№',
      'table_name' : 'Ady',
      'table_desc' : 'Beýany',
      'table_price' : 'Bahasy',
      'table1' : 'Desganyň fiziki gorag gullugynyň hyzmatlary',
      'rc1' : 'Ýaragsyz gündizki gorag gullugy',
      'rc2' : 'Gündizki  ýaragsyz gorag gullugy (iň az sargyt – 12 sagat)',
      'rc3' : 'şertnama laýyklykda',
      'r2c1' : 'Ýaragsyz gijeki gorag gullugy',
      'r2c2' : 'Gijeki  ýaragsyz gorag gullugy (iň az sargyt – 12 sagat)',
      'r3c1' : 'Çalşyk görnüşdäki gorag gullugy',
      'r3c2' : 'Çalşyk görnüşdäki gorag gullugy',
      'r4c1' : 'Desganyň içki goragynyň we barlag-goýberiş nokadynyň üpjün edlimegi',
      'r4c2' : 'Desganyň içki goragynyň we barlag-goýberiş nokadynyň üpjün edlimegi',
      'table2' : 'Ýükleri ugrukdyrma hyzmatlary',
      'r5c1' : 'Ýükleriň ugrukdyrylmagy',
      'r5c2' : 'Ýükleriň gorag gullukçy bilen ugrukdyrylmagy',
      'r6c1' : 'Awtoulag ugrukdyrma',
      'r6c2' : 'Awtoulag ugrukdyrma (2 gorag gullukçy)',
      'table3' : 'Wideogözegçilik howpsuzlyk hyzmatlary',
      'r7c1' : 'Desganyň howpsuzlyk ulgamynyň gurnalmagy',
      'r7c2' : 'Desganyň howpsuzlyk ulgamynyň gurnalmagy kiçi, orta, uly göwrümli',
      'r8c1' : 'Desganyň howpsuzlyk ulgamynyň hyzmaty',
      'r8c2' : 'Desganyň howpsuzlyk ulgamynyň tehniki hyzmaty  kiçi, orta, uly göwrümli',
      'aftertable' : 'Esasy maksadymyz dogruçyllyga we hünärmenlige eýerip, Müşderilerimiziň isleglerini ýokary derejeli howpsuzlyk hyzmatlary bilen kanagatlandyrmak. Biziň işimiz  Müşderilerimiziň häzirki döwrüň standartlaryna laýyk gelýän  howpsuzlygny we özboluşly çözgütlerini taýýarlamaga gönükdirilendir.',
      'you_get' : 'BIZIŇ ÜSTÜNLIGIMIZ – SIZIŇ HOWPSUZLYGYŇYZ',
      'services_end' : '2016-njy ýylyň iýulyndan 2022-nji ýylyň iýulyna çenli kompaniýamyz Günorta Koreýanyň «HYUNDAI ENGINEERING Co. LTD» kompaniýasyna TACE - Türkmenbaşy etrabynyň, Gyýanly obasynyň çäginde etan kreýking enjam bilen polietilen we polipropilen öndürýän zawodyň gurluşygy Taslamasynda şeýle hem Türkmenistanyň Balkan welaýatynyň Türkmenbaşy şäherindäki nebiti gaýtadan işleýän zawodlar toplumynda TORE – mazut ýagynyň wakum distilýasiýasy, ýeňil olefinleriň alkilýasiýasy we benziniň garyndysy boýunça taslamalaryny düzmek, enjamlaryny satyn almak we gurmak Taslamasynda gorag hyzmatlaryny amala aşyrdy.',


      // Gallery page
      // TODO:
      'gal1' : 'Barlag-geçiriş nokady',
      'gal2' : 'Girýän ulaglaryň barlagy',
      'gal3' : 'Çykýan ulaglaryň barlagy',
      'gal4' : 'Obýektiň perimetriniň barlagy',
      'gal5' : 'Desganyň içki we göýberiş tertibiniň üpjünçiligi',
      'gal6' : 'Arassaçylyk we lukmançylyk gözegçiligi',
      'gal7' : 'Wideo gözegçilik usuly arkaly dolandyryş',
      'gal8' : 'Ulaglaryň giriş-çykyş nokadynda gözegçilik',
      'gal9' : 'El goşlarynyň barlagy',
      'gal10' : 'Uly agramly ulaglaryň barlagy',
      'gal11' : 'Goýberiş düzgüniniň gözegçiligi',
      'gal12' : 'Turniketden girýänleriň barlagy',
      'gal13' : '1-nji çalşygyň goragçylarynyň düzümi',
      'gal14' : '2-nji çalşygyň goragçylarynyň düzümi',

    },




      // TODO:
    'en': {

      'companyn1' : '"Zehinli Doganlar"',
      'companyn2' : 'Economic Society',
      'home' : 'Home',
      'about' : 'About Us',
      'services' : 'Services',
      'gallery' : 'Gallery',
      'contact' : 'Contact',
      'russian' : 'Russian',
      'turkmen' : 'Turkmen',
      'english' : 'English',
      'active_lang': 'Language',
      'bitewilik1' : 'Our slogan:',
      'bitewilik2' : '«integrity & safety»',
      'aboutus_title' : 'About us',


      
    'about_shortly'  : 'The main activity of the economic company is the provision of security services, specializing in services for the physical and console protection (remote security) of objects and their perimeter. The list of the company\'s services includes unarmed security of objects and property, provision of inside the object and access control at the objects, installation and maintenance of security and alarm systems. The company provides security services to individuals, small and large enterprises, as well as foreign companies operating in the territory of Turkmenistan.',
    'learn_more'  : 'Learn more',
    'section1p'  : ' “Zehinli doganlar” is a reliable representative in the field of security services',
    'kartocka1_f'  : 'Unarmed day and night security',
    'kartocka2_f'  : 'Security on a rotational basis',
    'kartocka3_f'  : 'Ensuring inside the object and access control',
    'kartocka4_f'  : 'Cargo escort and escort vehicle',
    'kartocka5_f'  : 'Installation of object security systems',
    'kartocka6_f'  : 'Maintenance of the facility security system',
    'kartocka1'  : ' This type of service involves the presence of two shifts of guards at stationary posts for 12 hours, as well as bypassing and bypassing the perimeter of the object. It is allowed to use other modes of operation (7-and, 8-and, 12-hour or others) for security guards within the framework of the Labor Code. A mandatory requirement is the constant presence of one guard at the post.',
    'kartocka2'  : ' When using a rotational work method for security guards (12 hour working day), 2 guards will be on duty at the post per day, one will be on duty on the day shift, and the other on the night shift. After a 15 day shift, two new guards are on duty. Thus, a round-the-clock, constant presence of one guard at the guard post is achieved. In general, 4 people are involved in such a guard post during the month.',
    'kartocka3'  : ' This type of security service involves equipping the checkpoint with warning signs and turnstiles to control the passage of people and vehicles. More guards are expected here than in stationary posts, since they have to simultaneously perform more work, both vehicle inspection and a large flow of people.',
    'kartocka4'  : ' This type of security activity involves the provision of transport, security and escort of the Customer within 24 hours a day. At the request of the Customer, our company is able to provide drivers and security guards with knowledge of foreign languages.',
    'kartocka5'  : ' This service involves, by agreement of the Customer, the installation of a security alarm and a video surveillance system for visual control of the territory, warehouses and the perimeter of the protected object in order to prevent illegal actions by violators.',
    'kartocka6'  : ' This service involves the maintenance of the installed security alarm and video surveillance system for the smooth operation of the installed equipment.',
    'why_we'  : ' What do you get by cooperating with us?',
    'ls1'  : ' Reliable professional security of the object/perimeter',
    'ls2'  : ' Minimizing the risks of unauthorized persons entering the territory of the protected facility',
    'ls3'  : ' Preservation of property',
    'ls4'  : ' Personnel safety',
    'ls5'  : ' Personal security',
    'ls6'  : ' Conflict prevention',
    'ls7'  : ' Fast and professional response during various incidents',
    'ls8'  : ' Selection, installation, configuration and maintenance of integrated security and video surveillance systems',
    'ls9'  : ' Guaranteed confidentiality',
    'ls10'  : 'Legal actions in the field of protection of the Customer\'s property',
    'ls11'  : 'Constant quality control of the work of each employee',
    'ls12'  : '24/7 support',
    'ls13'  : 'Quiet life and the ability to concentrate on your goals without worrying about security',
    'summary'  : '"Zehinli Doganlar" security company is a smart choice for protecting any object. We are a recognized leader in the field of security, maintaining security standards and ensuring the safety of everything we are responsible for. ',
    'section2h3'  : 'Focus on what is important to you  ',
    'section2h32'  : ' and we will take care of your safety!',
    'section3h3'  : 'Turning to the private security company "Zehinli doganlar" ',
    'section3p'  : ' you will keep your property intact and safe!',
    'how_we_work'  : ' How we are working',
    'contract'  : ' Contract',
    'information'  : ' Information',
    'analysis'  : ' Analysis',
    'mount'  : ' Assembling',
    'guard'  : ' Protection',
    'ct1'  : ' Conclusion of bilateral contracts based on mutual agreements',
    'ct2'  : ' Protection of an object depends on the degree of its vulnerability, location, area and other characteristics',
    'ct3'  : 'Conducting a thorough inspection and analysis of the facility to provide an individual set of measures for the security of the facility ',
    'ct4'  : 'After agreement with the Customer, the necessary equipment is installed ',
    'ct5'  : 'Guaranteeing the high quality of the services provided and prompt response and clarity of actions of employees even in the most unusual situation ',
    'contact_us'  : ' Contacts',
    'phone_number'  : 'Phone number ',
    'faxno'  : 'Fax ',
    'adres1'  : ' legal address',
    'adres1desc'  : '745110, Turkmenistan, Balkan region, Gumdag city, complex of residential buildings no 15, house 88. ',
    'adres2'  : ' physical address',
    'adres2desc'  : '745000, Turkmenistan, Balkan region, Turkmenbashi city, shopping center "Shagadam", room no: 31 ',
    'send_message' : 'Send message',
  

    // ABOUT.HTML SAHYPASYNDAKYLAR
    // TODO
      
      
    'about_p1' : 'Private security company "Zehinli Doganlar" was founded on June 22, 2016 and reregistered on May 29, 2020 as a business entity in order to acquire additional codes for the SCEA (the state classifier of types of economic activities). The enterprise operates on the basis of the Unified State Register No. 24594443 dated May 29, 2020 and the Charter of the enterprise issued by the Ministry of Economy and Development of Turkmenistan.',
    'about_p2' : 'The main activity of the economic company is the provision of security services, specializing in services for the physical and console protection (remote security) of objects and their perimeter. The list of the company\'s services includes unarmed security of objects and property, provision of inside the object and access control at the objects, installation and maintenance of security and alarm systems. The company provides security services to individuals, small and large enterprises, as well as foreign companies operating in the territory of Turkmenistan.',
    'about_p3' : 'The economic society "Zehinli Doganlar" carries out its security activities in accordance with the unified SCEA (State Classification of Economic Activities), introduced on 01.01.2014, section 80, group 80.1, class 80.10, which includes the activities of security guards, watchmen, security gate men, guard services and group 80.2, class 80.20, which includes ensuring the functioning of security systems.',
    'about_p4' : '"Zehinli Doganlar" Economic Society has all the necessary regulatory documents and resources to perform security services, including transport and PPE for security guards. The company provides qualified security guards with experienced staff who work 24 hours a day for 7 (seven) days a week. Security services are provided 24 hours a day.',
    'about_p5' : 'Also, the company releases the Customer from all kinds of risks related to the health of security workers, injuries at the workplace, etc., since the employees are insured against possible risks of injuries at the workplace.',
    'about_p6' : 'From July 2016 to July 2022, our company provided security services to the South Korean company “HYUNDAI ENGINEERING Co. LTD” under the TACE project - construction of a plant for the production of polyethylene and polypropylene with an ethane cracker unit, in the territory of the Kiyanly village, Turkmenbashi district and the TORE project - design, purchase and construction of vacuum distillation units for fuel oil, alkylation of light olefins, blending of gasoline located in the Turkmenbashi Oil Refinery Complex, a shift camp in the city of Turkmenbashi, Balkan region of Turkmenistan.',
    'about_p7' : '“Zehinli Doganlar” Economic Society actively participates in tenders held by foreign companies such as “CNPC International” (T-n), “ENI” (T-n), “Petronas Çarigali” (T-n), operating on the basis of an agreement on the distribution of products and the Law of Turkmenistan "On hydrocarbon resources", and also the South Korean company “Hyundai Engineering Co. ltd.” ',
    'about_p8' : 'The goal of the company corresponds to its motto "Integrity and safety", since the main task is to take prompt measures to prevent unauthorized intrusions, as well as to ensure the integrity and safety of the property of the protected object. ',
    'about_p9' : 'Contact us and you will keep your property safe and sound!',
    'diversifikasiya_title' : 'ENTERPRISE DIVERSIFICATION',
    'diversifikasiya_text' : 'In order to diversify the activities of the economic society, in 2020, work was established on the maintenance of cars and the provision of catering services, and in January 2021, a contract was signed with the Agency of the State Fish Protection and Control of Aquatic Biological Resources of Turkmenistan for the extraction of fish and biological resources in the Turkmen part waters of the Caspian Sea. In addition, the company maintains trade relations with such countries as the United Arab Emirates, China, Turkey, Russia, Azerbaijan and Kazakhstan.',
    'autoservice' : 'AUTO SERVICE AND CAFE',
    'fishing' : 'fishing',
    'our_clients' : 'OUR FOREIGN SALES REPRESENTATIVES',
    'charity_title' : 'charity',
    'charity_h3' : '“Good deeds give strength to ourselves and encourage others to do good deeds”',
    'charity_1' : 'Since 2019, "Zehinli Doganlar" Economic Society has been engaged in charitable activities. The first step was taken in April 2019 by contributing funds for the construction of the main mosque of the Balkan region in the city of Balkanabat',
    'charity_2' : 'Provide rehabilitation treatment to Rehabilitation Center in Ashgabat for the Disabled of Turkmenistan',
    'charity_3' : 'To the National Center for Special Olympics of Turkmenistan (NCSOT) in the purchase of sports equipment, sports equipment for the upcoming championships in sports, where people with Down syndrome and intellectually disabled people take part',
    'charity_4' : 'To the Society of the Deaf and Dumb in Balkanabat to improve the conditions for the maintenance of children with disabilities',
    'charity_5' : 'To entrepreneur H. Godanov on the creation of a local history museum in the city of Etrek, Etrek district, Balkan region',
    
    // FIXME: ŞUNY TÄZEDEN PEREWOD ETMELI BOLUP BILER
    'charity_6' : 'In connection with the celebration of the day of the disabled and people with disabilities, as well as assistance in improving the services provided by the Society of the Disabled of Turkmenistan, we provided financial assistance',
    'charity_end' : 'The "Zehinli Doganlar" Economic Society plans to continue its charitable activities, as the best way to keep the memory of good deeds is to repeat them',
      
    // Services.html SAHYPASYNDAKYLAR
    // TODO
      
    'services_h3' : 'Fulfilling the terms of the contract is one thing, being with the client and hear him means managing business well.',
    // FIXME: shuna bir zat yazmaly bolup biler
    'services_1' : '',
    'services_p1' : 'The competitive advantage of our company is a wide range of services, including both physical and console (remote) security services. In this regard, the company provides the following types of security services:',
    'usluga1' : 'Services of physical protection of objects - ',
    'usluga1.1' : 'a set of measures aimed at ensuring the safety of the operation of an object, the safety of its material property, the protection of life and health of its personnel. The task of physical security includes access control, inspection of vehicles, prevention of theft and plunder, bypassing the facility and the surrounding area, monitoring the video surveillance system, monitoring the actions of visitors and employees of the enterprise, protecting material assets that are freely available, taking primary measures to eliminate technical accidents and fires, prevent unauthorized access and enhance and maintain the high status of the facility/enterprise.',
      
    'usluga2' : 'Console (remote) security services - ',
    'usluga2.1' : 'are a set of electronic systems that allow to ensure the security of an object by means of round-the-clock transmission of data received via secure communication channels to the monitoring center console. Modern security systems significantly reduce the risks of illegal entry into the territory, allow you to quickly take measures to investigate the incident, if it does happen. If an emergency situation occurs at the facility, the system instantly notifies the guards about it. Alarming situations include attempted burglary, illegal entry, theft of property and similar acts.',
    
    'usluga3' : 'Cargo escort services -',
    'usluga3.1' : 'cargo escort is understood not only as the direct presence of security guards along the entire transportation route, but also as a whole range of preliminary preparation and preventive security measures. Cargo escort services include a preparatory stage - the optimal choice of transport for transportation, proper loading in compliance with security measures, equipment of transport with tracking equipment, development of an optimal and maximum safe route to the destination, taking into account the terrain and other important nuances, preliminary reconnaissance of the territory for the presence of dangerous factors, organization of safe methods of receiving, sending and issuing cargo, scheduling stops for rest, refueling with marks of medical, checkpoints, accurate calculation of the time of cargo arrival, physical escort of cargo by special agents of the service.',
    
    'uslugap4' : 'The correct organization of the transportation of valuable cargo in the presence of a security complex guarantees the customer 100% integrity and safety of the cargo.',
    'uslugap5' : 'We adapt our services to the individual needs of each customer. We provide reliable cooperation based on the conclusion of official contracts with flexible and loyal pricing.',
    
      
    'No' : 'No',
    'table_name' : 'Name',
    'table_desc' : 'Description',
    'table_price' : 'Price',
    'table1' : 'Services of physical protection of objects',
    'rc1' : 'Unarmed daytime guard',
    'rc2' : 'Daytime guard without arms (minimum order - 12 hours)',
    'rc3' : 'contractual',
    'r2c1' : 'Unarmed guards at night',
    'r2c2' : 'Night security without  arms (minimum order - 12 hours)',
    'r3c1' : 'Security on a rotational basis',
    'r3c2' : 'Security on a rotational basis',
    'r4c1' : 'Ensuring inside the object and access modes',
    'r4c2' : 'Ensuring inside the object and access modes',
    'table2' : 'Cargo escort services',
    'r5c1' : 'Cargo escort',
    'r5c2' : 'Escort of goods by a security guard',
    'r6c1' : 'Providing escort cars',
    'r6c2' : 'Escort car (2 guards)',
    'table3' : 'Console (remote) security services',
    'r7c1' : 'Installation of the facility security system',
    'r7c2' : 'Installation of an object security system of small, medium, large capacity',
    'r8c1' : 'Maintenance of the facility security system',
    'r8c2' : 'Maintenance of object security systems of small, medium, large capacity',
    'aftertable' : 'Our main goal is to provide impeccable security services that exceed the expectations and needs of our clients, based on integrity and professionalism. Our work is focused on developing unique solutions for the security of our customers that correspond to the realities of today.',
    'you_get' : 'OUR SUCCESS - YOUR SAFETY',
    'services_end' : 'From July 2016 to July 2022, our company provided security services to the South Korean company  “HYUNDAI ENGINEERING Co. LTD” under the TACE project - construction of a plant for the production of polyethylene and polypropylene with an ethane cracking unit, in the territory of  Kiyanly village, Turkmenbashi district and the TORE project - design, purchase and construction of vacuum distillation units for fuel oil, alkylation of light olefins, blending of gasoline located in the Turkmenbashi Oil Refinery Complex, a shift camp in the city of Turkmenbashy, Balkan region of Turkmenistan.',
      
// Gallery page
      // TODO:
    'gal1': 'Work at the checkpoint',
    'gal2': 'Inspection of entering transport',
    'gal3': 'Inspection of the departing transport',
    'gal4': 'Inspection of the perimeter of the object',
    'gal5': 'Providing within the object and access control',
    'gal6': 'Sanitary-medical control',
    'gal7': 'Control of remote security (guarding)',
    'gal8': 'Control at the checkpoint',
    'gal9': 'Checking hand luggage',
    'gal10': 'Inspection of heavy vehicles',
    'gal11': 'Access control',
    'gal12': 'Control over passing through the turnstile',
    'gal13': 'Guards of the 1st shift',
    'gal14': 'Guards of the 2nd shift',

    }
  };


  

$(function() {
  $('.translate').click(function() {
      var lang = $(this).attr('id');
      saveLocalLang(lang)

      $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
      });
  });
});

//  LOCAL STORAGE

function saveLocalLang(language) {
  let langs
  if (localStorage.getItem('langs') === null) {
      langs = []
  } else {
      langs = JSON.parse(localStorage.getItem('langs'))
  }
  langs.push(language)
  localStorage.setItem('langs',JSON.stringify(langs))
}

function getLocalLang() {
  let langs
  if (localStorage.getItem('langs') === null) {
      langs = []
  } else {
      langs = JSON.parse(localStorage.getItem('langs'))
  }
  langs.forEach(function (language) {
      let lang = langs[langs.length - 1]
      setTimeout(() => {
          $('.lang').each(function(index, item) {
              $(this).text(arrLang[lang][$(this).attr('key')]);
          });
      }, 0)
  })
}