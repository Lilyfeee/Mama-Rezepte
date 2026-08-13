const BREAD_RECIPES = [
    [
        'bread',
        '🌿',
        4,
        {
            'zh-Hant': {
                t: '篝火麵包',
                z: [
                    ['300克', '麵粉'],
                    ['¾包', '酵母'],
                    ['1½茶匙', '鹽'],
                    ['½茶匙', '糖'],
                    ['2湯匙', '橄欖油'],
                    ['172毫升', '溫水']
                ],
                s: [
                    ['揉麵', '將所有材料揉成光滑麵團。', 0],
                    ['發酵', '蓋好靜置1小時。', 3600],
                    ['整形', '分份，纏繞在棍子上。', 0],
                    ['烤製', '烤架上烤約10分鐘至金黃色。', 600]
                ]
            },

            'zh-Hans': {
                t: '篝火面包',
                z: [
                    ['300克', '面粉'],
                    ['¾包', '酵母'],
                    ['1½茶匙', '盐'],
                    ['½茶匙', '糖'],
                    ['2汤匙', '橄榄油'],
                    ['172毫升', '温水']
                ],
                s: [
                    ['揉面', '将所有材料揉成光滑面团。', 0],
                    ['发酵', '盖好静置1小时。', 3600],
                    ['整形', '分份，缠绕在棍子上。', 0],
                    ['烤制', '烤架上烤约10分钟至金黄色。', 600]
                ]
            },

            de: {
                t: 'Stockbrot',
                z: [
                    ['300 g', 'Mehl'],
                    ['¾ Pkg.', 'Hefe'],
                    ['1½ TL', 'Salz'],
                    ['½ TL', 'Zucker'],
                    ['2 EL', 'Olivenöl'],
                    ['172 ml', 'warmes Wasser']
                ],
                s: [
                    ['Teig', 'Alle Zutaten zu einem glatten Teig verkneten.', 0],
                    ['Gehen lassen', '1 Stunde abgedeckt gehen lassen.', 3600],
                    ['Formen', 'In Portionen teilen und um Stöcke wickeln.', 0],
                    ['Grillen', 'Ca. 10 min über Feuer goldbraun backen.', 600]
                ]
            },

            en: {
                t: 'Stick Bread',
                z: [
                    ['300 g', 'Flour'],
                    ['¾ pkt', 'Yeast'],
                    ['1½ tsp', 'Salt'],
                    ['½ tsp', 'Sugar'],
                    ['2 tbsp', 'Olive oil'],
                    ['172 ml', 'Warm water']
                ],
                s: [
                    ['Knead', 'Knead all ingredients into a smooth dough.', 0],
                    ['Rise', 'Cover and let rise 1 hour.', 3600],
                    ['Shape', 'Divide and wrap around sticks.', 0],
                    ['Grill', 'Grill ~10 min until golden brown.', 600]
                ]
            }
        }
    ],

    [
        'bread',
        '🍕',
        5,
        {
            'zh-Hant': {
                t: '意大利薄餅麵團',
                d: 'Caputo Cuoco — 酵母: 4h=3茶匙 | 8h=2茶匙 | 12h=1茶匙',

                z: [
                    ['500克', 'Caputo Cuoco麵粉'],
                    ['1平湯匙', '鹽'],
                    ['約350毫升', '冷水'],
                    ['按發酵時間', '乾酵母']
                ],

                s: [
                    ['揉麵', '用濕手揉麵至少20分鐘，不要讓麵團變熱！', 1200],
                    ['發酵', '根據酵母量發酵4、8或12小時。', 14400],
                    ['烤製', '分割，加配料，最高溫度烤製。', 0]
                ],

                n: '一定要用冷水！'
            },

            'zh-Hans': {
                t: '意大利披萨面团',
                d: 'Caputo Cuoco — 酵母: 4h=3茶匙 | 8h=2茶匙 | 12h=1茶匙',

                z: [
                    ['500克', 'Caputo Cuoco面粉'],
                    ['1平汤匙', '盐'],
                    ['约350毫升', '冷水'],
                    ['按发酵时间', '干酵母']
                ],

                s: [
                    ['揉面', '用湿手揉面至少20分钟，不要让面团变热！', 1200],
                    ['发酵', '根据酵母量发酵4、8或12小时。', 14400],
                    ['烤制', '分割，加配料，最高温度烤制。', 0]
                ],

                n: '一定要用冷水！'
            },

            de: {
                t: 'Italienischer Pizzateig',
                d: 'Caputo Cuoco — Hefe: 4h=3TL | 8h=2TL | 12h=1TL',

                z: [
                    ['500 g', 'Caputo Cuoco Mehl'],
                    ['1 EL flach', 'Salz'],
                    ['~350 ml', 'kaltes Wasser'],
                    ['nach Gehzeit', 'Caputo-Trockenhefe']
                ],

                s: [
                    ['Kneten', 'Mind. 20 min mit nassen Händen kneten. Nicht warm werden lassen!', 1200],
                    ['Gehzeit', '4, 8 oder 12 Stunden gehen lassen.', 14400],
                    ['Backen', 'In Portionen teilen, belegen, bei höchster Hitze backen.', 0]
                ],

                n: 'Immer kaltes Wasser verwenden!'
            },

            en: {
                t: 'Italian Pizza Dough',
                d: 'Caputo Cuoco — Yeast: 4h=3tsp | 8h=2tsp | 12h=1tsp',

                z: [
                    ['500 g', 'Caputo Cuoco flour'],
                    ['1 tbsp flat', 'Salt'],
                    ['~350 ml', 'Cold water'],
                    ['see rise time', 'Caputo dry yeast']
                ],

                s: [
                    ['Knead', 'Knead at least 20 min with wet hands. Do not let it get warm!', 1200],
                    ['Rise', 'Let rise 4, 8 or 12 hours.', 14400],
                    ['Bake', 'Divide, top, bake at highest heat.', 0]
                ],

                n: 'Always use cold water!'
            }
        }
    ],

    [
        'bread',
        '🍕',
        4,
        {
            'zh-Hant': {
                t: '酸種薄餅（Lievito Madre）',
                d: '冷藏發酵2天',

                z: [
                    ['1千克', 'Caputo比薩粉'],
                    ['約600毫升', '冷水'],
                    ['按包裝', '酵母'],
                    ['30克', '鹽'],
                    ['1包', 'Lievito Madre（天然酵母）']
                ],

                s: [
                    ['和麵', '將所有材料混合。', 0],
                    ['室溫發酵', '室溫靜置2小時。', 7200],
                    ['分割成球', '分成約250克小球，向內折疊塑形。', 0],
                    ['冷藏', '放冰箱冷藏2天。', 0]
                ]
            },

            'zh-Hans': {
                t: '酸面团披萨（Lievito Madre）',
                d: '冷藏发酵2天',

                z: [
                    ['1千克', 'Caputo比萨粉'],
                    ['约600毫升', '冷水'],
                    ['按包装', '酵母'],
                    ['30克', '盐'],
                    ['1包', 'Lievito Madre（天然酵母）']
                ],

                s: [
                    ['和面', '将所有材料混合。', 0],
                    ['室温发酵', '室温静置2小时。', 7200],
                    ['分割成球', '分成约250克小球，向内折叠塑形。', 0],
                    ['冷藏', '放冰箱冷藏2天。', 0]
                ]
            },

            de: {
                t: 'Pizza mit Sauerteig (Lievito Madre)',
                d: '2 Tage Kaltlagerung',

                z: [
                    ['1 kg', 'Caputo Pizzamehl'],
                    ['~600 ml', 'kaltes Wasser'],
                    ['nach Pkg.', 'Hefe'],
                    ['30 g', 'Salz'],
                    ['1 Pkg.', 'Lievito Madre (Sauerteig)']
                ],

                s: [
                    ['Teig', 'Alle Zutaten verrühren.', 0],
                    ['2h ruhen', '2 Stunden bei Raumtemperatur gehen lassen.', 7200],
                    ['Bällchen', 'Ca. 250g-Bällchen formen, ziehen und nach innen falten.', 0],
                    ['Kalt lagern', '2 Tage im Kühlschrank lagern.', 0]
                ]
            },

            en: {
                t: 'Pizza with Sourdough (Lievito Madre)',
                d: '2 days cold fermentation',

                z: [
                    ['1 kg', 'Caputo pizza flour'],
                    ['~600 ml', 'Cold water'],
                    ['see package', 'Yeast'],
                    ['30 g', 'Salt'],
                    ['1 pkt', 'Lievito Madre (sourdough)']
                ],

                s: [
                    ['Mix', 'Mix all ingredients.', 0],
                    ['Rest 2h', 'Let rest at room temperature for 2 hours.', 7200],
                    ['Balls', 'Form ~250g balls, stretch and fold inward.', 0],
                    ['Cold proof', 'Refrigerate for 2 days.', 0]
                ]
            }
        }
    ],

    [
        'bread',
        '🫓',
        4,
        {
            'zh-Hant': {
                t: '法式薄餅、可麗餅與丁內登',
                d: '4種麵團',

                z: [
                    ['─法式薄餅─', ''],
                    ['250克', '麵粉'],
                    ['2茶匙', '橄欖油'],
                    ['100毫升', '水'],
                    ['1茶匙', '鹽'],

                    ['─可麗餅─', ''],
                    ['50克', '牛油'],
                    ['150克', '麵粉'],
                    ['2個', '雞蛋'],
                    ['200毫升', '牛奶'],

                    ['─斯佩爾特披薩─', ''],
                    ['400克', '斯佩爾特粉1050'],
                    ['240毫升', '熱水'],
                    ['3湯匙', '橄欖油'],
                    ['1個', '酵母'],

                    ['─丁內登─', ''],
                    ['500克', '斯佩爾特粉1050'],
                    ['1個', '酵母'],
                    ['300毫升', '水']
                ],

                s: [
                    ['法式薄餅', '揉麵，擀成極薄，做2-3張。', 0],
                    ['可麗餅', '混合所有材料，靜置20分鐘，平底鍋煎。', 1200],
                    ['斯佩爾特披薩', '揉麵發酵，烤盤刷油/大蒜。', 3600],
                    ['丁內登', '揉麵，擀薄，塗酸奶油和細香蔥。', 0]
                ]
            },

            'zh-Hans': {
                t: '法式薄饼、可丽饼与丁内登',
                d: '4种面团',

                z: [
                    ['─法式薄饼─', ''],
                    ['250克', '面粉'],
                    ['2茶匙', '橄榄油'],
                    ['100毫升', '水'],
                    ['1茶匙', '盐'],

                    ['─可丽饼─', ''],
                    ['50克', '黄油'],
                    ['150克', '面粉'],
                    ['2个', '鸡蛋'],
                    ['200毫升', '牛奶'],

                    ['─斯佩尔特披萨─', ''],
                    ['400克', '斯佩尔特粉1050'],
                    ['240毫升', '热水'],
                    ['3汤匙', '橄榄油'],
                    ['1个', '酵母'],

                    ['─丁内登─', ''],
                    ['500克', '斯佩尔特粉1050'],
                    ['1个', '酵母'],
                    ['300毫升', '水']
                ],

                s: [
                    ['法式薄饼', '揉面，擀成极薄，做2-3张。', 0],
                    ['可丽饼', '混合所有材料，静置20分钟，平底锅煎。', 1200],
                    ['斯佩尔特披萨', '揉面发酵，烤盘刷油/大蒜。', 3600],
                    ['丁内登', '揉面，擀薄，涂酸奶油和细香葱。', 0]
                ]
            },

            de: {
                t: 'Flammkuchen, Crepes & Dinneten',
                d: '4 Teig-Varianten',

                z: [
                    ['─FLAMMKUCHEN─', ''],
                    ['250 g', 'Mehl'],
                    ['2 TL', 'Olivenöl'],
                    ['100 ml', 'Wasser'],
                    ['1 TL', 'Salz'],

                    ['─CREPES─', ''],
                    ['50 g', 'Butter'],
                    ['150 g', 'Mehl'],
                    ['2', 'Eier'],
                    ['200 ml', 'Milch'],

                    ['─PIZZA DINKEL─', ''],
                    ['400 g', 'Dinkelmehl 1050'],
                    ['240 ml', 'heißes Wasser'],
                    ['3 EL', 'Olivenöl'],
                    ['1', 'Hefe'],

                    ['─DINNETEN─', ''],
                    ['500 g', 'Dinkelmehl 1050'],
                    ['1', 'Hefe'],
                    ['300 ml', 'Wasser']
                ],

                s: [
                    ['Flammkuchen', 'Mehl, Öl, Wasser, Salz kneten. Sehr dünn ausrollen.', 0],
                    ['Crepes', 'Zutaten mischen, 20 min ruhen, in Pfanne ausbacken.', 1200],
                    ['Pizza Dinkel', 'Teig kneten, gehen lassen. Blech mit Öl/Knoblauch bestreichen.', 3600],
                    ['Dinneten', 'Teig kneten, dünn ausrollen, Sauerrahm + Schnittlauch.', 0]
                ]
            },

            en: {
                t: 'Flammkuchen, Crepes & Dinneten',
                d: '4 dough variants',

                z: [
                    ['─FLAMMKUCHEN─', ''],
                    ['250 g', 'Flour'],
                    ['2 tsp', 'Olive oil'],
                    ['100 ml', 'Water'],
                    ['1 tsp', 'Salt'],

                    ['─CREPES─', ''],
                    ['50 g', 'Butter'],
                    ['150 g', 'Flour'],
                    ['2', 'Eggs'],
                    ['200 ml', 'Milk'],

                    ['─SPELT PIZZA─', ''],
                    ['400 g', 'Spelt flour 1050'],
                    ['240 ml', 'Hot water'],
                    ['3 tbsp', 'Olive oil'],
                    ['1', 'Yeast'],

                    ['─DINNETEN─', ''],
                    ['500 g', 'Spelt flour 1050'],
                    ['1', 'Yeast'],
                    ['300 ml', 'Water']
                ],

                s: [
                    ['Flammkuchen', 'Knead dough, roll very thin.', 0],
                    ['Crepes', 'Mix all, rest 20 min, fry in pan.', 1200],
                    ['Spelt Pizza', 'Knead, let rise, brush tray with oil/garlic.', 3600],
                    ['Dinneten', 'Knead, roll thin, top with sour cream + chives.', 0]
                ]
            }
        }
    ]
];
