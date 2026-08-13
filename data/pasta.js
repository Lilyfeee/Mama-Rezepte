const PASTA_RECIPES = [
    [
        'pasta',
        '🥟',
        4,
        {
            'zh-Hant': {
                t: '中式蒸饅頭',
                d: '使用蓮花特筋粉',
                z: [
                    ['165克', '紅蓮特筋麵粉'],
                    ['20克', '普通麵粉'],
                    ['100毫升', '溫水'],
                    ['35克', '乾酵母'],
                    ['1小撮', '鹽'],
                    ['2克', '泡打粉'],
                    ['12克', '棕櫚油或植物油'],
                    ['20克', '糖']
                ],
                s: [
                    ['和麵', '將所有材料混合成麵團。', 0],
                    ['發酵', '蓋好靜置發酵。', 3600],
                    ['分割', '分成8份，再次發酵。', 1800],
                    ['蒸製', '在沸水上蒸5分鐘。', 300]
                ]
            },

            'zh-Hans': {
                t: '中式蒸馒头',
                d: '使用莲花特筋粉',
                z: [
                    ['165克', '红莲特筋面粉'],
                    ['20克', '普通面粉'],
                    ['100毫升', '温水'],
                    ['35克', '干酵母'],
                    ['1小撮', '盐'],
                    ['2克', '泡打粉'],
                    ['12克', '棕榈油或植物油'],
                    ['20克', '糖']
                ],
                s: [
                    ['和面', '将所有材料混合成面团。', 0],
                    ['发酵', '盖好静置发酵。', 3600],
                    ['分割', '分成8份，再次发酵。', 1800],
                    ['蒸制', '在沸水上蒸5分钟。', 300]
                ]
            },

            de: {
                t: 'Chinesische Dampfnudeln',
                z: [
                    ['165 g', 'Red Lotus Special Flour'],
                    ['20 g', 'Backmehl'],
                    ['100 ml', 'warmes Wasser'],
                    ['35 g', 'Trockenhefe'],
                    ['1 Pr.', 'Salz'],
                    ['2 g', 'Backpulver'],
                    ['12 g', 'Palmin oder Pflanzenöl'],
                    ['20 g', 'Zucker']
                ],
                s: [
                    ['Teig', 'Alle Zutaten verrühren.', 0],
                    ['Gehen lassen', 'Abdecken und gehen lassen.', 3600],
                    ['Teilen', '8 Stücke formen, nochmals aufgehen lassen.', 1800],
                    ['Dämpfen', '5 min über kochendem Wasser dämpfen.', 300]
                ]
            },

            en: {
                t: 'Chinese Steamed Buns',
                z: [
                    ['165 g', 'Red Lotus Special Flour'],
                    ['20 g', 'Plain flour'],
                    ['100 ml', 'Warm water'],
                    ['35 g', 'Dry yeast'],
                    ['1 pinch', 'Salt'],
                    ['2 g', 'Baking powder'],
                    ['12 g', 'Palmin or vegetable oil'],
                    ['20 g', 'Sugar']
                ],
                s: [
                    ['Mix', 'Mix all ingredients into a dough.', 0],
                    ['Rise', 'Cover and let rise.', 3600],
                    ['Divide', 'Form 8 pieces, let rise again.', 1800],
                    ['Steam', 'Steam over boiling water for 5 min.', 300]
                ]
            }
        }
    ],

    [
        'pasta',
        '🍝',
        4,
        {
            'zh-Hant': {
                t: '德式麵疙瘩與意式填餡麵',
                z: [
                    ['─麵疙瘩─', ''],
                    ['500克', '麵粉'],
                    ['6個', '雞蛋'],
                    ['200毫升', '牛奶'],
                    ['20克', '黃油'],
                    ['─填餡麵團─', ''],
                    ['150克', '杜蘭小麥粉'],
                    ['150克', '405型麵粉'],
                    ['3個', '雞蛋'],
                    ['1湯匙', '橄欖油']
                ],
                s: [
                    ['麵疙瘩', '黃油+配料混合，靜置，在鹽水中煮熟。', 600],
                    ['填餡麵團', '揉麵，裹保鮮膜冷藏30分鐘，填餡後煮熟。', 1800]
                ]
            },

            'zh-Hans': {
                t: '德式面疙瘩与意式填馅面',
                z: [
                    ['─面疙瘩─', ''],
                    ['500克', '面粉'],
                    ['6个', '鸡蛋'],
                    ['200毫升', '牛奶'],
                    ['20克', '黄油'],
                    ['─填馅面团─', ''],
                    ['150克', '杜兰小麦粉'],
                    ['150克', '405型面粉'],
                    ['3个', '鸡蛋'],
                    ['1汤匙', '橄榄油']
                ],
                s: [
                    ['面疙瘩', '黄油+配料混合，静置，在盐水中煮熟。', 600],
                    ['填馅面团', '揉面，裹保鲜膜冷藏30分钟，填馅后煮熟。', 1800]
                ]
            },

            de: {
                t: 'Spätzle & Gefüllte Nudeln',
                z: [
                    ['─SPÄTZLE─', ''],
                    ['500 g', 'Mehl'],
                    ['6', 'Eier'],
                    ['200 ml', 'Milch'],
                    ['20 g', 'Butter'],
                    ['─GEFÜLLTE NUDELN─', ''],
                    ['150 g', 'Hartweizengrieß'],
                    ['150 g', 'Mehl Typ 405'],
                    ['3', 'Eier'],
                    ['1 EBL', 'Olivenöl']
                ],
                s: [
                    ['Spätzle', 'Butter + Zutaten mischen, in Salzwasser kochen.', 600],
                    ['Gef. Nudeln', 'Teig kneten, 30 min Kühlschrank, füllen und kochen.', 1800]
                ]
            },

            en: {
                t: 'Spätzle & Stuffed Pasta',
                z: [
                    ['─SPÄTZLE─', ''],
                    ['500 g', 'Flour'],
                    ['6', 'Eggs'],
                    ['200 ml', 'Milk'],
                    ['20 g', 'Butter'],
                    ['─STUFFED PASTA─', ''],
                    ['150 g', 'Durum wheat semolina'],
                    ['150 g', 'Plain flour 405'],
                    ['3', 'Eggs'],
                    ['1 tbsp', 'Olive oil']
                ],
                s: [
                    ['Spätzle', 'Mix butter + ingredients, cook in salted water.', 600],
                    ['Stuffed pasta', 'Knead, wrap in cling film, 30 min fridge. Fill and cook.', 1800]
                ]
            }
        }
    ],

    [
        'pasta',
        '🥐',
        4,
        {
            'zh-Hant': {
                t: '椰子辮子麵包',
                d: '140度，20分鐘',
                z: [
                    ['─麵團─', ''],
                    ['500克', '麵粉'],
                    ['200毫升', '椰奶'],
                    ['80克', '黃油'],
                    ['1包', '酵母'],
                    ['2個', '雞蛋'],
                    ['150克', '糖'],
                    ['─餡料─', ''],
                    ['1包', '耐熱布丁粉'],
                    ['200毫升', '椰奶'],
                    ['2湯匙', '椰蓉']
                ],
                s: [
                    ['酵母麵團', '用麵團材料製作酵母麵團。', 3600],
                    ['餡料', '混合餡料材料。', 0],
                    ['包餡', '將餡料包入麵團。', 0],
                    ['蒸製', '用水蘸濕，150度蒸10分鐘。', 600],
                    ['烘烤', '刷雞蛋液，140度烤20分鐘。', 1200]
                ]
            },

            'zh-Hans': {
                t: '椰子辫子面包',
                d: '140度，20分钟',
                z: [
                    ['─面团─', ''],
                    ['500克', '面粉'],
                    ['200毫升', '椰奶'],
                    ['80克', '黄油'],
                    ['1包', '酵母'],
                    ['2个', '鸡蛋'],
                    ['150克', '糖'],
                    ['─馅料─', ''],
                    ['1包', '耐热布丁粉'],
                    ['200毫升', '椰奶'],
                    ['2汤匙', '椰蓉']
                ],
                s: [
                    ['酵母面团', '用面团材料制作酵母面团。', 3600],
                    ['馅料', '混合馅料材料。', 0],
                    ['包馅', '将馅料包入面团。', 0],
                    ['蒸制', '用水蘸湿，150度蒸10分钟。', 600],
                    ['烘烤', '刷鸡蛋液，140度烤20分钟。', 1200]
                ]
            },

            de: {
                t: 'Kokos-Hefezopf',
                d: '140 Grad, 20 min',
                z: [
                    ['─TEIG─', ''],
                    ['500 g', 'Mehl'],
                    ['200 ml', 'Kokosmilch'],
                    ['80 g', 'Butter'],
                    ['1 Pkg.', 'Hefe'],
                    ['2', 'Eier'],
                    ['150 g', 'Zucker'],
                    ['─FÜLLUNG─', ''],
                    ['1 Pkg.', 'Backfeste Pudding'],
                    ['200 ml', 'Kokosmilch'],
                    ['2 EBL', 'Kokosraspeln']
                ],
                s: [
                    ['Hefeteig', 'Hefeteig zubereiten.', 3600],
                    ['Füllung', 'Füllungs-Zutaten verrühren.', 0],
                    ['Einwickeln', 'Füllung in Teig einwickeln.', 0],
                    ['Anfeuchten', 'Mit Wasser anfeuchten, 150 Grad 10 min.', 600],
                    ['Backen', 'Mit Ei bestreichen, 140 Grad 20 min.', 1200]
                ]
            },

            en: {
                t: 'Coconut Yeast Braid',
                d: '140°C, 20 min',
                z: [
                    ['─DOUGH─', ''],
                    ['500 g', 'Flour'],
                    ['200 ml', 'Coconut milk'],
                    ['80 g', 'Butter'],
                    ['1 pkt', 'Yeast'],
                    ['2', 'Eggs'],
                    ['150 g', 'Sugar'],
                    ['─FILLING─', ''],
                    ['1 pkt', 'Heat-stable pudding'],
                    ['200 ml', 'Coconut milk'],
                    ['2 tbsp', 'Desiccated coconut']
                ],
                s: [
                    ['Dough', 'Prepare yeast dough.', 3600],
                    ['Filling', 'Mix filling ingredients.', 0],
                    ['Roll', 'Roll filling into dough.', 0],
                    ['Steam', 'Dampen, 150°C 10 min.', 600],
                    ['Bake', 'Brush with egg, 140°C 20 min.', 1200]
                ]
            }
        }
    ]
];
