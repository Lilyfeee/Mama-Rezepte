const BAKING_RECIPES = [
    [
        'baking',
        '🥞',
        4,
        {
            'zh-Hant': {
                t: '皇帝煎餅',
                d: '2016年',

                z: [
                    ['130克', '麵粉'],
                    ['250毫升', '牛奶'],
                    ['1湯匙', '糖'],
                    ['1小撮', '鹽'],
                    ['4個', '蛋黃'],
                    ['4個', '蛋清'],
                    ['50克', '糖（打發蛋清用）']
                ],

                s: [
                    ['打蛋白', '將50克糖和蛋清打發至硬性發泡。', 0],
                    ['混合', '將麵粉、牛奶、糖、鹽和蛋黃混合。', 0],
                    ['拌入', '將蛋白霜拌入麵糊。', 0],
                    ['煎製', '平底鍋煎熟，撕成小塊，繼續煎至金黃。', 600]
                ]
            },

            'zh-Hans': {
                t: '皇帝煎饼',
                d: '2016年',

                z: [
                    ['130克', '面粉'],
                    ['250毫升', '牛奶'],
                    ['1汤匙', '糖'],
                    ['1小撮', '盐'],
                    ['4个', '蛋黄'],
                    ['4个', '蛋清'],
                    ['50克', '糖（打发蛋清用）']
                ],

                s: [
                    ['打蛋白', '将50克糖和蛋清打发至硬性发泡。', 0],
                    ['混合', '将面粉、牛奶、糖、盐和蛋黄混合。', 0],
                    ['拌入', '将蛋白霜拌入面糊。', 0],
                    ['煎制', '平底锅煎熟，撕成小块，继续煎至金黄。', 600]
                ]
            },

            de: {
                t: 'Kaiserschmarrn',
                d: '2016',

                z: [
                    ['130 g', 'Mehl'],
                    ['250 ml', 'Milch'],
                    ['1 EL', 'Zucker'],
                    ['1 Pr.', 'Salz'],
                    ['4', 'Eigelb'],
                    ['4', 'Eiweiß'],
                    ['50 g', 'Zucker (Eischnee)']
                ],

                s: [
                    ['Eischnee', '50 g Zucker+Eiweiß steif schlagen.', 0],
                    ['Rest', 'Mehl, Milch, Zucker, Salz, Eigelb vermengen.', 0],
                    ['Unterheben', 'Eischnee darunter heben.', 0],
                    ['Braten', 'In Pfanne braten, in Stücke reißen, fertig braten.', 600]
                ]
            },

            en: {
                t: 'Kaiserschmarrn',
                d: '2016',

                z: [
                    ['130 g', 'Flour'],
                    ['250 ml', 'Milk'],
                    ['1 tbsp', 'Sugar'],
                    ['1 pinch', 'Salt'],
                    ['4', 'Egg yolks'],
                    ['4', 'Egg whites'],
                    ['50 g', 'Sugar (for meringue)']
                ],

                s: [
                    ['Meringue', 'Beat 50 g sugar+egg whites to stiff peaks.', 0],
                    ['Rest', 'Combine flour, milk, sugar, salt, yolks.', 0],
                    ['Fold', 'Fold in egg whites.', 0],
                    ['Fry', 'Fry in pan, tear into pieces, finish frying.', 600]
                ]
            }
        }
    ],

    [
        'baking',
        '🥞',
        2,
        {
            'zh-Hant': {
                t: '薄餅',
                d: '2017年2月',

                z: [
                    ['200克', '麵粉'],
                    ['1包', '泡打粉'],
                    ['1個', '大雞蛋'],
                    ['1小撮', '鹽'],
                    ['香草糖', ''],
                    ['牛奶', '適量'],
                    ['黃油', '煎鍋用']
                ],

                s: [
                    ['分蛋', '分離雞蛋，打發蛋清。', 0],
                    ['麵糊', '混合麵粉、泡打粉、鹽、香草糖，加牛奶至順滑。', 0],
                    ['拌入', '拌入打發的蛋清。', 0],
                    ['煎製', '在黃油鍋中煎至金黃色。', 0]
                ]
            },

            'zh-Hans': {
                t: '薄饼',
                d: '2017年2月',

                z: [
                    ['200克', '面粉'],
                    ['1包', '泡打粉'],
                    ['1个', '大鸡蛋'],
                    ['1小撮', '盐'],
                    ['香草糖', ''],
                    ['牛奶', '适量'],
                    ['黄油', '煎锅用']
                ],

                s: [
                    ['分蛋', '分离鸡蛋，打发蛋清。', 0],
                    ['面糊', '混合面粉、泡打粉、盐、香草糖，加牛奶至顺滑。', 0],
                    ['拌入', '拌入打发的蛋清。', 0],
                    ['煎制', '在黄油锅中煎至金黄色。', 0]
                ]
            },

            de: {
                t: 'Pancakes',
                d: 'Feb. 2017',

                z: [
                    ['200 g', 'Mehl'],
                    ['1 Pkg.', 'Backpulver'],
                    ['1', 'gr. Ei'],
                    ['1 Pr.', 'Salz'],
                    ['Vanillezucker', ''],
                    ['Milch', 'nach Bedarf'],
                    ['Butter', 'für Pfanne']
                ],

                s: [
                    ['Eier', 'Ei trennen, Eischnee schlagen.', 0],
                    ['Teig', 'Mehl, Backpulver, Salz, Vanillezucker mischen. Milch dazu bis cremig.', 0],
                    ['Unterheben', 'Eischnee unterheben.', 0],
                    ['Braten', 'In Pfanne mit Butter goldbraun backen.', 0]
                ]
            },

            en: {
                t: 'Pancakes',
                d: 'Feb. 2017',

                z: [
                    ['200 g', 'Flour'],
                    ['1 pkt', 'Baking powder'],
                    ['1', 'Large egg'],
                    ['1 pinch', 'Salt'],
                    ['Vanilla sugar', ''],
                    ['Milk', 'as needed'],
                    ['Butter', 'for pan']
                ],

                s: [
                    ['Eggs', 'Separate egg, whip whites to stiff peaks.', 0],
                    ['Batter', 'Mix flour, baking powder, salt, vanilla sugar. Add milk until creamy.', 0],
                    ['Fold', 'Fold in egg whites.', 0],
                    ['Cook', 'Cook in buttered pan until golden.', 0]
                ]
            }
        }
    ],

    [
        'baking',
        '🥞',
        2,
        {
            'zh-Hant': {
                t: '日式舒芙蕾鬆餅',
                d: '小火是關鍵！',

                z: [
                    ['2個', '中等雞蛋'],
                    ['20毫升', '牛奶'],
                    ['2湯匙', '低筋麵粉'],
                    ['½茶匙', '香草精'],
                    ['3茶匙', '糖'],
                    ['少量', '黃油/食用油']
                ],

                s: [
                    ['分蛋', '分離雞蛋。', 0],
                    ['蛋黃', '將蛋黃、牛奶、麵粉、香草混合至順滑。', 0],
                    ['蛋清', '加糖打發蛋清至硬性發泡——不要打過！', 0],
                    ['拌入', '用刮刀輕柔拌入蛋清，不要用打蛋器！', 0],
                    ['煎製', '平底鍋用小火加熱。舀入高堆，蓋鍋蓋，每面煎4-5分鐘。', 300]
                ],

                n: '平底鍋要均勻預熱，絕不能用大火！'
            },

            'zh-Hans': {
                t: '日式舒芙蕾松饼',
                d: '小火是关键！',

                z: [
                    ['2个', '中等鸡蛋'],
                    ['20毫升', '牛奶'],
                    ['2汤匙', '低筋面粉'],
                    ['½茶匙', '香草精'],
                    ['3茶匙', '糖'],
                    ['少量', '黄油/食用油']
                ],

                s: [
                    ['分蛋', '分离鸡蛋。', 0],
                    ['蛋黄', '将蛋黄、牛奶、面粉、香草混合至顺滑。', 0],
                    ['蛋清', '加糖打发蛋清至硬性发泡——不要打过！', 0],
                    ['拌入', '用刮刀轻柔拌入蛋清，不要用打蛋器！', 0],
                    ['煎制', '平底锅用小火加热。舀入高堆，盖锅盖，每面煎4-5分钟。', 300]
                ],

                n: '平底锅要均匀预热，绝不能用大火！'
            },

            de: {
                t: 'Japanische Soufflé-Pancakes',
                d: 'Niedrige Hitze ist entscheidend!',

                z: [
                    ['2', 'Eier (mittelgroß)'],
                    ['20 ml', 'Milch'],
                    ['2 EL', 'Kuchenmehl oder Allzweckmehl'],
                    ['½ TL', 'Vanilleextrakt'],
                    ['3 TL', 'Zucker'],
                    ['etwas', 'Butter/Öl für Pfanne']
                ],

                s: [
                    ['Trennen', 'Eier trennen.', 0],
                    ['Eigelb', 'Eigelb, Milch, Mehl, Vanille vermengen.', 0],
                    ['Eischnee', 'Eiweiß mit Zucker steif schlagen — nicht überschlagen!', 0],
                    ['Unterheben', 'Eischnee mit Spatel vorsichtig unterheben. Kein Mixer!', 0],
                    ['Backen', 'Pfanne bei NIEDRIGER Hitze, hoch auflöffeln, Deckel drauf, 4-5 min pro Seite.', 300]
                ],

                n: 'Pfanne gleichmäßig vorheizen. Niemals hohe Hitze!'
            },

            en: {
                t: 'Japanese Soufflé Pancakes',
                d: 'Low heat is essential!',

                z: [
                    ['2', 'Medium eggs'],
                    ['20 ml', 'Milk'],
                    ['2 tbsp', 'Cake flour or plain flour'],
                    ['½ tsp', 'Vanilla extract'],
                    ['3 tsp', 'Sugar'],
                    ['a little', 'Butter/oil for pan']
                ],

                s: [
                    ['Separate', 'Separate eggs.', 0],
                    ['Yolks', 'Mix yolks, milk, flour, vanilla until creamy.', 0],
                    ['Whites', 'Beat whites with sugar to stiff peaks.', 0],
                    ['Fold', 'Gently fold whites in with a spatula. No mixer!', 0],
                    ['Cook', 'Heat pan at LOW heat. Spoon high, cover, cook 4-5 min per side.', 300]
                ],

                n: 'Heat pan evenly. Never use high heat!'
            }
        }
    ],

    [
        'baking',
        '🍫',
        16,
        {
            'zh-Hant': {
                t: '布朗尼（雙倍巧克力）',
                d: '180度，20-25分鐘',

                z: [
                    ['230克', '黑巧克力'],
                    ['130克', '黃油'],
                    ['140克', '麵粉'],
                    ['200克', '糖'],
                    ['½茶匙', '泡打粉'],
                    ['¼茶匙', '鹽'],
                    ['1包', '香草糖'],
                    ['3個', '雞蛋'],
                    ['可選', '碧根果']
                ],

                s: [
                    ['融化', '將200克巧克力和黃油融化，冷卻。', 0],
                    ['麵粉', '混合麵粉、泡打粉和鹽。', 0],
                    ['雞蛋', '將雞蛋、糖打發至蓬鬆。', 0],
                    ['合并', '加入巧克力液，輕柔拌入麵粉。', 0],
                    ['配料', '加入碎巧克力和堅果（可選）。', 0],
                    ['烘烤', '倒入烤盤，180度烤20-25分鐘。', 1350]
                ]
            },

            'zh-Hans': {
                t: '布朗尼（双倍巧克力）',
                d: '180度，20-25分钟',

                z: [
                    ['230克', '黑巧克力'],
                    ['130克', '黄油'],
                    ['140克', '面粉'],
                    ['200克', '糖'],
                    ['½茶匙', '泡打粉'],
                    ['¼茶匙', '盐'],
                    ['1包', '香草糖'],
                    ['3个', '鸡蛋'],
                    ['可选', '碧根果']
                ],

                s: [
                    ['融化', '将200克巧克力和黄油融化，冷却。', 0],
                    ['面粉', '混合面粉、泡打粉和盐。', 0],
                    ['鸡蛋', '将鸡蛋、糖打发至蓬松。', 0],
                    ['合并', '加入巧克力液，轻柔拌入面粉。', 0],
                    ['配料', '加入碎巧克力和坚果（可选）。', 0],
                    ['烘烤', '倒入烤盘，180度烤20-25分钟。', 1350]
                ]
            },

            de: {
                t: 'Brownies (Double Choc)',
                d: '180 Grad, 20-25 min',

                z: [
                    ['230 g', 'Zartbitterschokolade'],
                    ['130 g', 'Butter'],
                    ['140 g', 'Mehl'],
                    ['200 g', 'Zucker'],
                    ['½ TL', 'Backpulver'],
                    ['¼ TL', 'Salz'],
                    ['1 Pkg.', 'Vanillezucker'],
                    ['3 (M)', 'Eier'],
                    ['opt.', 'Pekannüsse']
                ],

                s: [
                    ['Schmelzen', '200 g Schokolade+Butter schmelzen, abkühlen.', 0],
                    ['Mehl', 'Mehl, Backpulver, Salz mischen.', 0],
                    ['Eier', 'Eier, Zucker schaumig rühren.', 0],
                    ['Schoko', 'Schokomasse dazu, Mehlmischung vorsichtig unterheben.', 0],
                    ['Einlagen', 'Rest-Schoko+ggf. Nüsse dazu.', 0],
                    ['Backen', 'In Form füllen, 180 Grad 20-25 min.', 1350]
                ]
            },

            en: {
                t: 'Brownies (Double Choc)',
                d: '180°C, 20-25 min',

                z: [
                    ['230 g', 'Dark chocolate'],
                    ['130 g', 'Butter'],
                    ['140 g', 'Flour'],
                    ['200 g', 'Sugar'],
                    ['½ tsp', 'Baking powder'],
                    ['¼ tsp', 'Salt'],
                    ['1 pkt', 'Vanilla sugar'],
                    ['3 (M)', 'Eggs'],
                    ['opt.', 'Pecans']
                ],

                s: [
                    ['Melt', 'Melt 200 g chocolate+butter, cool.', 0],
                    ['Flour', 'Mix flour, baking powder, salt.', 0],
                    ['Eggs', 'Beat eggs and sugar until fluffy.', 0],
                    ['Chocolate', 'Add chocolate mix, fold in flour carefully.', 0],
                    ['Mix-ins', 'Add rest of chocolate+nuts if using.', 0],
                    ['Bake', 'Pour into tin, 180°C 20-25 min.', 1350]
                ]
            }
        }
    ],

    [
        'baking',
        '🎂',
        8,
        {
            'zh-Hant': {
                t: '超濕潤巧克力蛋糕',
                d: '麥芽啤酒讓蛋糕超鬆軟！麵糊比較稀。',

                z: [
                    ['250克', '黃油'],
                    ['50-120克', '糖'],
                    ['250毫升', '麥芽啤酒'],
                    ['3個', '雞蛋'],
                    ['香草', ''],
                    ['250克', '麵粉'],
                    ['100克', '可可粉'],
                    ['1小撮', '鹽'],
                    ['2茶匙', '泡打粉'],
                    ['½茶匙', '小蘇打'],
                    ['150克', '酸奶']
                ],

                s: [
                    ['融化', '融化黃油和糖，冷卻！', 0],
                    ['混合', '混合麥芽啤酒、雞蛋、香草和酸奶。', 0],
                    ['篩粉', '篩入麵粉、可可粉、鹽、泡打粉和小蘇打。', 0],
                    ['合并', '將濕料倒入冷卻的黃油糊中，拌入乾料。', 0],
                    ['烘烤', '倒入模具，約160度烘烤。', 2400]
                ]
            },

            'zh-Hans': {
                t: '超湿润巧克力蛋糕',
                d: '麦芽啤酒让蛋糕超松软！面糊比较稀。',

                z: [
                    ['250克', '黄油'],
                    ['50-120克', '糖'],
                    ['250毫升', '麦芽啤酒'],
                    ['3个', '鸡蛋'],
                    ['香草', ''],
                    ['250克', '面粉'],
                    ['100克', '可可粉'],
                    ['1小撮', '盐'],
                    ['2茶匙', '泡打粉'],
                    ['½茶匙', '小苏打'],
                    ['150克', '酸奶']
                ],

                s: [
                    ['融化', '融化黄油和糖，冷却！', 0],
                    ['混合', '混合麦芽啤酒、鸡蛋、香草和酸奶。', 0],
                    ['筛粉', '筛入面粉、可可粉、盐、泡打粉和小苏打。', 0],
                    ['合并', '将湿料倒入冷却的黄油糊中，拌入干料。', 0],
                    ['烘烤', '倒入模具，约160度烘烤。', 2400]
                ]
            },

            de: {
                t: 'Saftiger Schokoladenkuchen',
                d: 'Locker und saftig dank Malzbier! Teig ist flüssig.',

                z: [
                    ['250 g', 'Butter'],
                    ['50-120 g', 'Zucker'],
                    ['250 ml', 'Malzbier'],
                    ['3', 'Eier'],
                    ['Vanille', ''],
                    ['250 g', 'Mehl'],
                    ['100 g', 'Kakao'],
                    ['1 Pr.', 'Salz'],
                    ['2 TL', 'Backpulver'],
                    ['½ TL', 'Natron'],
                    ['150 g', 'Joghurt']
                ],

                s: [
                    ['Schmelzen', 'Butter+Zucker schmelzen, abkühlen lassen!', 0],
                    ['Mischen', 'Malzbier, Eier, Vanille, Joghurt verrühren.', 0],
                    ['Sieben', 'Mehl, Kakao, Salz, Backpulver, Natron sieben.', 0],
                    ['Vermengen', 'Nass zu abgekühltem Schmelz, dann Trockenes unterheben.', 0],
                    ['Backen', 'In Form füllen, ca. 160 Grad backen.', 2400]
                ]
            },

            en: {
                t: 'Super Moist Chocolate Cake',
                d: 'Light and moist thanks to malt beer! Batter is quite runny.',

                z: [
                    ['250 g', 'Butter'],
                    ['50-120 g', 'Sugar'],
                    ['250 ml', 'Malt beer'],
                    ['3', 'Eggs'],
                    ['Vanilla', ''],
                    ['250 g', 'Flour'],
                    ['100 g', 'Cocoa'],
                    ['1 pinch', 'Salt'],
                    ['2 tsp', 'Baking powder'],
                    ['½ tsp', 'Bicarbonate of soda'],
                    ['150 g', 'Yoghurt']
                ],

                s: [
                    ['Melt', 'Melt butter+sugar, let cool!', 0],
                    ['Mix', 'Mix malt beer, eggs, vanilla, yoghurt.', 0],
                    ['Sift', 'Sift flour, cocoa, salt, baking powder, bicarb.', 0],
                    ['Combine', 'Add wet to cooled melt, fold in dry.', 0],
                    ['Bake', 'Pour into tin, bake at ~160°C.', 2400]
                ]
            }
        }
    ],

    [
        'baking',
        '🎂',
        8,
        {
            'zh-Hant': {
                t: '俄式撕麵蛋糕',
                d: '175度，45分鐘',

                z: [
                    ['─麵團─', ''],
                    ['125克', '黃油'],
                    ['約80克', '糖'],
                    ['1個', '雞蛋'],
                    ['250克', '麵粉'],
                    ['½包', '泡打粉'],
                    ['25克', '可可粉'],

                    ['─餡料─', ''],
                    ['125克', '黃油'],
                    ['約60克', '糖'],
                    ['2個', '雞蛋'],
                    ['1包', '香草布丁粉'],
                    ['500克', '夸克奶酪'],
                    ['1個', '香草糖']
                ],

                s: [
                    ['麵團', '揉成酥皮。2/3用於底部，1/3用於頂部裝飾。', 0],
                    ['餡料', '將所有餡料混合均勻。', 0],
                    ['組合', '壓好底部，倒入餡料，將剩餘麵團撕碎鋪頂。', 0],
                    ['烘烤', '175度烤45分鐘。', 2700]
                ]
            },

            'zh-Hans': {
                t: '俄式撕面蛋糕',
                d: '175度，45分钟',

                z: [
                    ['─面团─', ''],
                    ['125克', '黄油'],
                    ['约80克', '糖'],
                    ['1个', '鸡蛋'],
                    ['250克', '面粉'],
                    ['½包', '泡打粉'],
                    ['25克', '可可粉'],

                    ['─馅料─', ''],
                    ['125克', '黄油'],
                    ['约60克', '糖'],
                    ['2个', '鸡蛋'],
                    ['1包', '香草布丁粉'],
                    ['500克', '夸克奶酪'],
                    ['1个', '香草糖']
                ],

                s: [
                    ['面团', '揉成酥皮。2/3用于底部，1/3用于顶部装饰。', 0],
                    ['馅料', '将所有馅料混合均匀。', 0],
                    ['组合', '压好底部，倒入馅料，将剩余面团撕碎铺顶。', 0],
                    ['烘烤', '175度烤45分钟。', 2700]
                ]
            },

            de: {
                t: 'Russischer Zupfkuchen',
                d: '175 Grad, 45 min',

                z: [
                    ['─TEIG─', ''],
                    ['125 g', 'Butter'],
                    ['~80 g', 'Zucker'],
                    ['1', 'Ei'],
                    ['250 g', 'Mehl'],
                    ['½ Pkg.', 'Backpulver'],
                    ['25 g', 'Kakao'],

                    ['─FÜLLUNG─', ''],
                    ['125 g', 'Butter'],
                    ['~60 g', 'Zucker'],
                    ['2', 'Eier'],
                    ['1 Pkg.', 'Vanillepudding'],
                    ['500 g', 'Quark'],
                    ['1', 'Vanillezucker']
                ],

                s: [
                    ['Teig', 'Knetteig. 2/3 für Boden, 1/3 für Streusel.', 0],
                    ['Füllung', 'Alle Füllungs-Zutaten verrühren.', 0],
                    ['Aufbauen', 'Boden belegen, Füllung drüber, Rest als Streusel zupfen.', 0],
                    ['Backen', '175 Grad 45 min.', 2700]
                ]
            },

            en: {
                t: 'Russian Cheesecake (Zupfkuchen)',
                d: '175°C, 45 min',

                z: [
                    ['─PASTRY─', ''],
                    ['125 g', 'Butter'],
                    ['~80 g', 'Sugar'],
                    ['1', 'Egg'],
                    ['250 g', 'Flour'],
                    ['½ pkt', 'Baking powder'],
                    ['25 g', 'Cocoa'],

                    ['─FILLING─', ''],
                    ['125 g', 'Butter'],
                    ['~60 g', 'Sugar'],
                    ['2', 'Eggs'],
                    ['1 pkt', 'Vanilla pudding'],
                    ['500 g', 'Quark'],
                    ['1', 'Vanilla sugar']
                ],

                s: [
                    ['Pastry', 'Knead dough. 2/3 for base, 1/3 for topping.', 0],
                    ['Filling', 'Mix all filling ingredients.', 0],
                    ['Build', 'Press base in, add filling, crumble rest on top.', 0],
                    ['Bake', '175°C 45 min.', 2700]
                ]
            }
        }
    ],

    [
        'baking',
        '🧇',
        8,
        {
            'zh-Hant': {
                t: '比利時華夫餅',
                d: '2018年12月——香脆可口！',

                z: [
                    ['125克', '黃油'],
                    ['75克', '糖'],
                    ['1包', '香草糖'],
                    ['1小撮', '鹽'],
                    ['3個', '雞蛋'],
                    ['250克', '麵粉'],
                    ['½包', '泡打粉'],
                    ['250毫升', '牛奶'],
                    ['125毫升', '氣泡水']
                ],

                s: [
                    ['蛋清', '打發蛋清至硬性發泡。', 0],
                    ['奶油', '黃油+糖+香草糖+鹽+蛋黃打至順滑。', 0],
                    ['混合', '逐漸加入麵粉和牛奶，再加氣泡水。', 0],
                    ['拌入', '拌入蛋白霜。', 0],
                    ['烤製', '華夫機5檔，每面60秒，+180秒=超脆。', 240]
                ],

                n: '小貼士：可以用部分堅果粉代替麵粉。'
            },

            'zh-Hans': {
                t: '比利时华夫饼',
                d: '2018年12月——香脆可口！',

                z: [
                    ['125克', '黄油'],
                    ['75克', '糖'],
                    ['1包', '香草糖'],
                    ['1小撮', '盐'],
                    ['3个', '鸡蛋'],
                    ['250克', '面粉'],
                    ['½包', '泡打粉'],
                    ['250毫升', '牛奶'],
                    ['125毫升', '气泡水']
                ],

                s: [
                    ['蛋清', '打发蛋清至硬性发泡。', 0],
                    ['奶油', '黄油+糖+香草糖+盐+蛋黄打至顺滑。', 0],
                    ['混合', '逐渐加入面粉和牛奶，再加气泡水。', 0],
                    ['拌入', '拌入蛋白霜。', 0],
                    ['烤制', '华夫机5档，每面60秒，+180秒=超脆。', 240]
                ],

                n: '小贴士：可以用部分坚果粉代替面粉。'
            },

            de: {
                t: 'Belgische Waffel',
                d: 'Dez. 2018 — knusprig lecker!',

                z: [
                    ['125 g', 'Butter'],
                    ['75 g', 'Zucker'],
                    ['1 Pkg.', 'Vanillezucker'],
                    ['1 Pr.', 'Salz'],
                    ['3', 'Eier'],
                    ['250 g', 'Mehl'],
                    ['½ Pkg.', 'Backpulver'],
                    ['250 ml', 'Milch'],
                    ['125 ml', 'Mineralwasser']
                ],

                s: [
                    ['Eischnee', 'Eiweiß steif schlagen.', 0],
                    ['Creme', 'Butter+Zucker+Vanillezucker+Salz+Eigelb cremig schlagen.', 0],
                    ['Rühren', 'Mehl+Milch nach und nach dazu, dann Mineralwasser.', 0],
                    ['Unterheben', 'Eischnee unterheben.', 0],
                    ['Backen', 'Waffeleisen Stufe 5, 60 sek je Seite. +180 sek = knusprig.', 240]
                ],

                n: 'Tipp: Mehl teilweise durch gemahlene Nüsse ersetzen.'
            },

            en: {
                t: 'Belgian Waffles',
                d: 'Dec. 2018 — crispy!',

                z: [
                    ['125 g', 'Butter'],
                    ['75 g', 'Sugar'],
                    ['1 pkt', 'Vanilla sugar'],
                    ['1 pinch', 'Salt'],
                    ['3', 'Eggs'],
                    ['250 g', 'Flour'],
                    ['½ pkt', 'Baking powder'],
                    ['250 ml', 'Milk'],
                    ['125 ml', 'Sparkling water']
                ],

                s: [
                    ['Whites', 'Beat egg whites to stiff peaks.', 0],
                    ['Cream', 'Beat butter+sugar+vanilla+salt+yolks until creamy.', 0],
                    ['Mix', 'Gradually add flour+milk, then sparkling water.', 0],
                    ['Fold', 'Fold in egg whites.', 0],
                    ['Cook', 'Waffle iron level 5, 60 sec each side. +180 sec = extra crispy.', 240]
                ],

                n: 'Tip: replace some flour with ground nuts.'
            }
        }
    ],

    [
        'baking',
        '🧁',
        12,
        {
            'zh-Hant': {
                t: '葡式蛋撻',
                d: '250度，20分鐘',

                z: [
                    ['500克', '千層酥皮'],
                    ['8個', '蛋黃'],
                    ['200克', '糖'],
                    ['1茶匙', '檸檬皮屑'],
                    ['500毫升', '奶油'],
                    ['2茶匙', '麵粉']
                ],

                s: [
                    ['蛋黃', '打散蛋黃。', 0],
                    ['蛋奶液', '將奶油、糖、檸檬皮和蛋黃一起加熱，冷卻。', 0],
                    ['整形', '將千層酥皮壓入馬芬模，填入蛋奶液。', 0],
                    ['烘烤', '250度烤20分鐘。', 1200]
                ]
            },

            'zh-Hans': {
                t: '葡式蛋挞',
                d: '250度，20分钟',

                z: [
                    ['500克', '千层酥皮'],
                    ['8个', '蛋黄'],
                    ['200克', '糖'],
                    ['1茶匙', '柠檬皮屑'],
                    ['500毫升', '奶油'],
                    ['2茶匙', '面粉']
                ],

                s: [
                    ['蛋黄', '打散蛋黄。', 0],
                    ['蛋奶液', '将奶油、糖、柠檬皮和蛋黄一起加热，冷却。', 0],
                    ['整形', '将千层酥皮压入马芬模，填入蛋奶液。', 0],
                    ['烘烤', '250度烤20分钟。', 1200]
                ]
            },

            de: {
                t: 'Portugiesische Puddingtörtchen',
                d: '250 Grad, 20 min',

                z: [
                    ['500 g', 'Blätterteig'],
                    ['8', 'Eigelb'],
                    ['200 g', 'Zucker'],
                    ['1 TL', 'Zitronenschale'],
                    ['500 ml', 'Sahne'],
                    ['2 TL', 'Mehl']
                ],

                s: [
                    ['Eigelb', 'Aufschlagen.', 0],
                    ['Creme', 'Sahne+Zucker+Zitronenschale+Eigelb erhitzen, abkühlen.', 0],
                    ['Formen', 'Blätterteig in Muffinformen drücken, füllen.', 0],
                    ['Backen', '250 Grad 20 min.', 1200]
                ]
            },

            en: {
                t: 'Portuguese Custard Tarts',
                d: '250°C, 20 min',

                z: [
                    ['500 g', 'Puff pastry'],
                    ['8', 'Egg yolks'],
                    ['200 g', 'Sugar'],
                    ['1 tsp', 'Lemon zest'],
                    ['500 ml', 'Cream'],
                    ['2 tsp', 'Flour']
                ],

                s: [
                    ['Yolks', 'Whisk egg yolks.', 0],
                    ['Custard', 'Heat cream+sugar+lemon+yolks, cool.', 0],
                    ['Line', 'Press pastry into muffin tins, fill.', 0],
                    ['Bake', '250°C 20 min.', 1200]
                ]
            }
        }
    ],

    [
        'baking',
        '🍎',
        12,
        {
            'zh-Hant': {
                t: '蘋果酥粒蛋糕',
                d: '180度，40分鐘',

                z: [
                    ['─烤盤蛋糕─', ''],
                    ['4個', '雞蛋'],
                    ['250克', '糖'],
                    ['250克', '麵粉'],
                    ['1茶匙', '泡打粉'],

                    ['─酥粒─', ''],
                    ['250克', '黃油'],
                    ['250克', '糖'],
                    ['400克', '麵粉'],
                    ['蘋果', '適量']
                ],

                s: [
                    ['底部', '混合麵團，鋪入烤盤。', 0],
                    ['蘋果', '鋪上蘋果片。', 0],
                    ['酥粒', '將酥粒材料揉成屑狀，撒在頂部。', 0],
                    ['烘烤', '180度烤約40分鐘。', 2400]
                ]
            },

            'zh-Hans': {
                t: '苹果酥粒蛋糕',
                d: '180度，40分钟',

                z: [
                    ['─烤盘蛋糕─', ''],
                    ['4个', '鸡蛋'],
                    ['250克', '糖'],
                    ['250克', '面粉'],
                    ['1茶匙', '泡打粉'],

                    ['─酥粒─', ''],
                    ['250克', '黄油'],
                    ['250克', '糖'],
                    ['400克', '面粉'],
                    ['苹果', '适量']
                ],

                s: [
                    ['底部', '混合面团，铺入烤盘。', 0],
                    ['苹果', '铺上苹果片。', 0],
                    ['酥粒', '将酥粒材料揉成屑状，撒在顶部。', 0],
                    ['烘烤', '180度烤约40分钟。', 2400]
                ]
            },

            de: {
                t: 'Apfel-Streusel',
                d: '180 Grad, 40 min',

                z: [
                    ['─BLECH-TEIG─', ''],
                    ['4', 'Eier'],
                    ['250 g', 'Zucker'],
                    ['250 g', 'Mehl'],
                    ['1 TL', 'Backpulver'],

                    ['─STREUSEL─', ''],
                    ['250 g', 'Butter'],
                    ['250 g', 'Zucker'],
                    ['400 g', 'Mehl'],
                    ['Äpfel', 'nach Bedarf']
                ],

                s: [
                    ['Teig', 'Teig-Zutaten verrühren, auf Blech streichen.', 0],
                    ['Äpfel', 'Apfelscheiben verteilen.', 0],
                    ['Streusel', 'Streusel-Zutaten verkneten und drüber streuen.', 0],
                    ['Backen', '180 Grad ca. 40 min.', 2400]
                ]
            },

            en: {
                t: 'Apple Crumble Cake',
                d: '180°C, 40 min',

                z: [
                    ['─TRAY SPONGE─', ''],
                    ['4', 'Eggs'],
                    ['250 g', 'Sugar'],
                    ['250 g', 'Flour'],
                    ['1 tsp', 'Baking powder'],

                    ['─CRUMBLE─', ''],
                    ['250 g', 'Butter'],
                    ['250 g', 'Sugar'],
                    ['400 g', 'Flour'],
                    ['Apples', 'as needed']
                ],

                s: [
                    ['Base', 'Mix and spread into tin.', 0],
                    ['Apples', 'Layer apple slices on top.', 0],
                    ['Crumble', 'Rub together and scatter on top.', 0],
                    ['Bake', '180°C ~40 min.', 2400]
                ]
            }
        }
    ],

    [
        'baking',
        '🥕',
        9,
        {
            'zh-Hant': {
                t: '胡蘿蔔蛋糕（無糖）',
                d: '160度，25分鐘 | 約9個馬芬',

                z: [
                    ['150克', '胡蘿蔔泥'],
                    ['150克', '堅果粉'],
                    ['100克', '軟椰棗'],
                    ['3個', '雞蛋'],
                    ['50克', '黃油或葡萄籽油'],
                    ['1個', '檸檬皮屑'],
                    ['肉桂+香草', '適量'],
                    ['50克', '麵粉'],
                    ['1茶匙', '小蘇打']
                ],

                s: [
                    ['椰棗', '切小，加水加熱至軟爛。', 300],
                    ['蛋清', '打發至硬性發泡。', 0],
                    ['混合', '其餘材料+椰棗+蛋黃混合均勻。', 0],
                    ['拌入', '拌入蛋白霜。', 0],
                    ['烘烤', '倒入馬芬模，160度烤25分鐘。', 1500]
                ]
            },

            'zh-Hans': {
                t: '胡萝卜蛋糕（无糖）',
                d: '160度，25分钟 | 约9个马芬',

                z: [
                    ['150克', '胡萝卜泥'],
                    ['150克', '坚果粉'],
                    ['100克', '软椰枣'],
                    ['3个', '鸡蛋'],
                    ['50克', '黄油或葡萄籽油'],
                    ['1个', '柠檬皮屑'],
                    ['肉桂+香草', '适量'],
                    ['50克', '面粉'],
                    ['1茶匙', '小苏打']
                ],

                s: [
                    ['椰枣', '切小，加水加热至软烂。', 300],
                    ['蛋清', '打发至硬性发泡。', 0],
                    ['混合', '其余材料+椰枣+蛋黄混合均匀。', 0],
                    ['拌入', '拌入蛋白霜。', 0],
                    ['烘烤', '倒入马芬模，160度烤25分钟。', 1500]
                ]
            },

            de: {
                t: 'Karottenkuchen (zuckerfrei)',
                d: '160 Grad, 25 min | ca. 9 Muffins',

                z: [
                    ['150 g', 'geriebene Karotten'],
                    ['150 g', 'gem. Nüsse'],
                    ['100 g', 'weiche Datteln'],
                    ['3', 'Eier'],
                    ['50 g', 'Butter oder Traubenkernöl'],
                    ['1', 'geriebene Zitrone'],
                    ['Zimt + Vanille', 'nach Gesch.'],
                    ['50 g', 'Mehl'],
                    ['1 TL', 'Natron']
                ],

                s: [
                    ['Datteln', 'Klein schneiden, mit Wasser aufwärmen bis weich.', 300],
                    ['Eischnee', 'Steif schlagen.', 0],
                    ['Vermengen', 'Rest+Datteln+Eigelb gut mischen.', 0],
                    ['Unterheben', 'Eischnee unterheben.', 0],
                    ['Backen', 'In Muffinformen, 160 Grad 25 min.', 1500]
                ]
            },

            en: {
                t: 'Carrot Cake (sugar-free)',
                d: '160°C, 25 min | about 9 muffins',

                z: [
                    ['150 g', 'Grated carrots'],
                    ['150 g', 'Ground nuts'],
                    ['100 g', 'Soft dates'],
                    ['3', 'Eggs'],
                    ['50 g', 'Butter or grape seed oil'],
                    ['1', 'Grated lemon'],
                    ['Cinnamon + vanilla', 'to taste'],
                    ['50 g', 'Flour'],
                    ['1 tsp', 'Bicarbonate of soda']
                ],

                s: [
                    ['Dates', 'Chop small, warm with water until soft.', 300],
                    ['Whites', 'Beat egg whites to stiff peaks.', 0],
                    ['Mix', 'Combine rest+dates+yolks.', 0],
                    ['Fold', 'Fold in egg whites.', 0],
                    ['Bake', 'Fill muffin tins, 160°C 25 min.', 1500]
                ]
            }
        }
    ],

    [
        'baking',
        '🫐',
        6,
        {
            'zh-Hant': {
                t: '醋栗撻',
                d: '2013年3月',

                z: [
                    ['─酥皮─', ''],
                    ['80克', '黃油'],
                    ['25克', '椰子油脂'],
                    ['130克', '麵粉'],
                    ['1小撮', '鹽'],
                    ['50克', '糖'],

                    ['─餡料─', ''],
                    ['130克', '紅醋栗'],
                    ['香草', ''],
                    ['200克', '酸奶油'],
                    ['125克', '馬斯卡彭'],
                    ['2個', '雞蛋'],
                    ['40克', '糖']
                ],

                s: [
                    ['麵團', '揉成酥皮，冷藏30分鐘。', 1800],
                    ['盲烤', '200度盲烤10分鐘。', 600],
                    ['餡料', '混合酸奶油、馬斯卡彭、雞蛋、糖和香草。', 0],
                    ['烘烤', '鋪上醋栗和餡料，150度烤35分鐘。', 2100]
                ]
            },

            'zh-Hans': {
                t: '醋栗挞',
                d: '2013年3月',

                z: [
                    ['─酥皮─', ''],
                    ['80克', '黄油'],
                    ['25克', '椰子油脂'],
                    ['130克', '面粉'],
                    ['1小撮', '盐'],
                    ['50克', '糖'],

                    ['─馅料─', ''],
                    ['130克', '红醋栗'],
                    ['香草', ''],
                    ['200克', '酸奶油'],
                    ['125克', '马斯卡彭'],
                    ['2个', '鸡蛋'],
                    ['40克', '糖']
                ],

                s: [
                    ['面团', '揉成酥皮，冷藏30分钟。', 1800],
                    ['盲烤', '200度盲烤10分钟。', 600],
                    ['馅料', '混合酸奶油、马斯卡彭、鸡蛋、糖和香草。', 0],
                    ['烘烤', '铺上醋栗和馅料，150度烤35分钟。', 2100]
                ]
            },

            de: {
                t: 'Johannis-Tart',
                d: 'März 2013',

                z: [
                    ['─MÜRBETEIG─', ''],
                    ['80 g', 'Butter'],
                    ['25 g', 'Kokosfett'],
                    ['130 g', 'Mehl'],
                    ['1 Pr.', 'Salz'],
                    ['50 g', 'Zucker'],

                    ['─FÜLLUNG─', ''],
                    ['130 g', 'Johannisbeere'],
                    ['Vanille', ''],
                    ['200 g', 'Schmand'],
                    ['125 g', 'Mascarpone'],
                    ['2', 'Eier'],
                    ['40 g', 'Zucker']
                ],

                s: [
                    ['Teig', 'Knetteig formen, 30 min kalt stellen.', 1800],
                    ['Blindbacken', '200 Grad 10 min blindbacken.', 600],
                    ['Füllung', 'Schmand+Mascarpone+Eier+Zucker+Vanille verrühren.', 0],
                    ['Backen', 'Johannisbeeren+Füllung drüber, 150 Grad 35 min.', 2100]
                ]
            },

            en: {
                t: 'Redcurrant Tart',
                d: 'March 2013',

                z: [
                    ['─SHORTCRUST─', ''],
                    ['80 g', 'Butter'],
                    ['25 g', 'Coconut fat'],
                    ['130 g', 'Flour'],
                    ['1 pinch', 'Salt'],
                    ['50 g', 'Sugar'],

                    ['─FILLING─', ''],
                    ['130 g', 'Redcurrants'],
                    ['Vanilla', ''],
                    ['200 g', 'Soured cream'],
                    ['125 g', 'Mascarpone'],
                    ['2', 'Eggs'],
                    ['40 g', 'Sugar']
                ],

                s: [
                    ['Pastry', 'Knead, chill 30 min.', 1800],
                    ['Blind bake', '200°C 10 min blind bake.', 600],
                    ['Filling', 'Mix soured cream+mascarpone+eggs+sugar+vanilla.', 0],
                    ['Bake', 'Top with berries+filling, 150°C 35 min.', 2100]
                ]
            }
        }
    ],

    [
        'baking',
        '🥚',
        5,
        {
            'zh-Hant': {
                t: '蛋白大蒜麵包',
                d: '只需2種主要食材！每份52卡路里 | 12克蛋白質 | 0克碳水',

                z: [
                    ['200克', '液態蛋白'],
                    ['100克', '低脂芝士絲'],
                    ['適量', '蒜粉 + 鹽']
                ],

                s: [
                    ['打發蛋白', '將蛋白打發至硬性發泡。', 0],
                    ['拌入材料', '輕柔地將芝士絲、蒜粉和鹽拌入——不要過度攪拌！', 0],
                    ['整形', '用湯匙在烘焙紙上舀出小堆。', 0],
                    ['烤製', '200度烤10-15分鐘，直至膨脹金黃。', 750]
                ],

                n: '無麵包。無麵粉。純粹的蛋白質魔法！來源：@steakandbuttergal'
            },

            'zh-Hans': {
                t: '蛋白大蒜面包',
                d: '只需2种主要食材！每份52卡路里 | 12克蛋白质 | 0克碳水',

                z: [
                    ['200克', '液态蛋白'],
                    ['100克', '低脂芝士丝'],
                    ['适量', '蒜粉 + 盐']
                ],

                s: [
                    ['打发蛋白', '将蛋白打发至硬性发泡。', 0],
                    ['拌入材料', '轻柔地将芝士丝、蒜粉和盐拌入——不要过度搅拌！', 0],
                    ['整形', '用汤匙在烘焙纸上舀出小堆。', 0],
                    ['烤制', '200度烤10-15分钟，直至膨胀金黄。', 750]
                ],

                n: '无面包。无面粉。纯粹的蛋白质魔法！来源：@steakandbuttergal'
            },

            de: {
                t: 'Eiweiss-Knoblauchbrot',
                d: 'Nur 2 Zutaten! 52 kcal | 12g Protein | 0g Carbs',

                z: [
                    ['200 g', 'flüssiges Eiweiß'],
                    ['100 g', 'Eat Lean Shredded Cheese'],
                    ['nach Gesch.', 'Knoblauchpulver + Salz']
                ],

                s: [
                    ['Eiweiß schlagen', 'Eiweiß steif schlagen bis feste Spitzen entstehen.', 0],
                    ['Unterheben', 'Käse, Knoblauchpulver und Salz vorsichtig unterheben.', 0],
                    ['Häufchen', 'Mit Löffel kleine Häufchen auf Backpapier setzen.', 0],
                    ['Backen', '200°C 10-15 min bis aufgepufft und goldbraun.', 750]
                ],

                n: 'Kein Brot. Kein Mehl. Pure Macro Magic! Quelle: @steakandbuttergal'
            },

            en: {
                t: 'Egg White Garlic Bread',
                d: 'Only 2 ingredients! 52 cal | 12g protein | 0g carbs',

                z: [
                    ['200 g', 'Liquid egg whites'],
                    ['100 g', 'Eat Lean shredded cheese'],
                    ['to taste', 'Garlic powder + salt']
                ],

                s: [
                    ['Whip', 'Beat egg whites until stiff peaks form.', 0],
                    ['Fold', 'Gently fold in cheese, garlic powder and spices.', 0],
                    ['Spoon', 'Spoon into mounds on parchment paper.', 0],
                    ['Bake', '200°C 10-15 min until puffed & golden.', 750]
                ],

                n: 'No bread. No flour. Pure Macro Magic! Source: @steakandbuttergal'
            }
        }
    ],

    [
        'baking',
        '🥕',
        12,
        {
            'zh-Hant': {
                t: 'Emmy的胡蘿蔔蛋糕',

                z: [
                    ['350克', '胡蘿蔔，切碎'],
                    ['200克', '杏仁粉'],
                    ['200克', '榛子粉'],
                    ['50-75克', '椰絲'],
                    ['175克', '糖'],
                    ['50-80毫升', '食用油'],
                    ['1湯匙', '檸檬汁'],
                    ['5個', '雞蛋']
                ],

                s: [
                    ['準備', '胡蘿蔔去皮切碎。', 0],
                    ['混合', '將胡蘿蔔以外的所有材料放入碗中攪拌均勻。', 0],
                    ['加入', '加入切碎的胡蘿蔔拌勻。', 0],
                    ['入模', '倒入模具中。', 0],
                    ['烘烤', '上下火160–170度烤60–80分鐘。', 4800],
                    ['收尾', '轉熱風175–180度再烤10分鐘。', 600]
                ]
            },

            'zh-Hans': {
                t: 'Emmy的胡萝卜蛋糕',

                z: [
                    ['350克', '胡萝卜，切碎'],
                    ['200克', '杏仁粉'],
                    ['200克', '榛子粉'],
                    ['50-75克', '椰丝'],
                    ['175克', '糖'],
                    ['50-80毫升', '食用油'],
                    ['1汤匙', '柠檬汁'],
                    ['5个', '鸡蛋']
                ],

                s: [
                    ['准备', '胡萝卜去皮切碎。', 0],
                    ['混合', '将胡萝卜以外的所有材料放入碗中搅拌均匀。', 0],
                    ['加入', '加入切碎的胡萝卜拌匀。', 0],
                    ['入模', '倒入模具中。', 0],
                    ['烘烤', '上下火160–170度烤60–80分钟。', 4800],
                    ['收尾', '转热风175–180度再烤10分钟。', 600]
                ]
            },

            de: {
                t: 'Emmys Karotten-Kuchen',

                z: [
                    ['350 g', 'Karotten, klein gehackt'],
                    ['200 g', 'Mandeln, gemahlen'],
                    ['200 g', 'Haselnüsse, gemahlen'],
                    ['50–75 g', 'Kokosraspeln'],
                    ['175 g', 'Zucker'],
                    ['50–80 ml', 'Öl'],
                    ['1 EL', 'Zitronensaft'],
                    ['5', 'Eier']
                ],

                s: [
                    ['Vorbereiten', 'Karotten schälen und klein hacken.', 0],
                    ['Mixen', 'Alle Zutaten außer Karotten in einer Schüssel mixen.', 0],
                    ['Hinzugeben', 'Gehackte Karotten unterheben.', 0],
                    ['Einfüllen', 'Teig in eine Form geben.', 0],
                    ['Backen', 'Ober-Unterhitze 160–170 °C, 60–80 Minuten backen.', 4800],
                    ['Abschluss', 'Umluft 175–180 °C, nochmals 10 Minuten backen.', 600]
                ]
            },

            en: {
                t: "Emmy's Carrot Cake",

                z: [
                    ['350 g', 'carrots, finely chopped'],
                    ['200 g', 'ground almonds'],
                    ['200 g', 'ground hazelnuts'],
                    ['50–75 g', 'desiccated coconut'],
                    ['175 g', 'sugar'],
                    ['50–80 ml', 'oil'],
                    ['1 tbsp', 'lemon juice'],
                    ['5', 'eggs']
                ],

                s: [
                    ['Prep', 'Peel and finely chop the carrots.', 0],
                    ['Mix', 'Combine all ingredients except carrots in a bowl and mix well.', 0],
                    ['Add', 'Fold in the chopped carrots.', 0],
                    ['Pour', 'Pour batter into a baking tin.', 0],
                    ['Bake', 'Bake at 160–170 °C top/bottom heat for 60–80 minutes.', 4800],
                    ['Finish', 'Switch to fan 175–180 °C and bake for another 10 minutes.', 600]
                ]
            }
        }
    ],

    [
        'baking',
        '🌰',
        4,
        {
            'zh-Hant': {
                t: '焦糖杏仁',

                z: [
                    ['200克', '杏仁'],
                    ['50-70克', '糖'],
                    ['3克', '肉桂'],
                    ['約2克', '香草精'],
                    ['2湯匙', '水']
                ],

                s: [
                    ['混合', '將所有材料混合均勻。', 0],
                    ['烘烤', '165度烤15–21分鐘，每3分鐘攪拌一次。', 1260]
                ]
            },

            'zh-Hans': {
                t: '焦糖杏仁',

                z: [
                    ['200克', '杏仁'],
                    ['50-70克', '糖'],
                    ['3克', '肉桂'],
                    ['约2克', '香草精'],
                    ['2汤匙', '水']
                ],

                s: [
                    ['混合', '将所有材料混合均匀。', 0],
                    ['烘烤', '165度烤15–21分钟，每3分钟搅拌一次。', 1260]
                ]
            },

            de: {
                t: 'Gebrannte Mandeln',

                z: [
                    ['200 g', 'Mandeln'],
                    ['50–70 g', 'Zucker'],
                    ['3 g', 'Zimt'],
                    ['ca. 2 g', 'Vanilleextrakt'],
                    ['2 EL', 'Wasser']
                ],

                s: [
                    ['Mischen', 'Alle Zutaten mischen.', 0],
                    ['Backen', 'Bei 165 °C 15–21 Minuten backen, alle 3 Minuten rühren.', 1260]
                ]
            },

            en: {
                t: 'Candied Almonds',

                z: [
                    ['200 g', 'almonds'],
                    ['50–70 g', 'sugar'],
                    ['3 g', 'cinnamon'],
                    ['approx. 2 g', 'vanilla extract'],
                    ['2 tbsp', 'water']
                ],

                s: [
                    ['Mix', 'Combine all ingredients.', 0],
                    ['Bake', 'Bake at 165 °C for 15–21 minutes, stirring every 3 minutes.', 1260]
                ]
            }
        }
    ]
];
