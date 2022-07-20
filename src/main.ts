/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags,WA.player.id);
    
var config = {
    volume : 0.2,
    loop : false,
    rate : 1,
    detune : 1,
    delay : 0,
    seek : 0,
    mute : false
};
    
    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup","Время " + time,[]);
    });

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp);
    
    WA.room.onEnterLayer("nz1").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы поймать акулу",
            callback: () => {
                WA.chat.sendChatMessage("Холодное, как лед, Не дышит, но живет; Всегда кольчугу носит И пьет, хоть пить не просит.", "Вы достаете акулу из воды и снимаете привязанную к хвосту записку с цифрой 1")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    
        WA.room.onEnterLayer("nz2").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы осмотреть странную плитку",
            callback: () => {
                WA.chat.sendChatMessage("На красных холмах Тридцать белых коней Друг другу навстречу Помчатся скорей, Ряды их сойдутся, Потом разойдутся, — И смирными станут До новых затей.", "Вы замечаете приподнятую плитку под которой лежит записка с цифрой 2")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    
        WA.room.onEnterLayer("nz3").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы сорвать персик",
            callback: () => {
                WA.chat.sendChatMessage("Без голоса кричит, Без крыльев летает, Без зубов кусает, Без рта бормочет.", "Внутри персика оказалась записка с цифрой 3")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    
        WA.room.onEnterLayer("nz4").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы раздвинуть ветви",
            callback: () => {
                WA.chat.sendChatMessage("Не увидать ее корней, Вершина выше тополей, Все вверх и вверх она идет, Но не растет.", "Внутри ветвей вы находите привязанную к баклажану записку с цифрой 4")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    
        WA.room.onEnterLayer("nz5").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы осмотреть корабль",
            callback: () => {
                WA.chat.sendChatMessage("Уничтожает все кругом: Цветы, зверей, высокий дом, — Сжует железо, сталь сожрет И скалы в порошок сотрет, Мощь городов, власть королей Его могущества слабей.", "К корме прибита записака с цифрой 5")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });

//НАЧАЛО ПРИМЕРА 1
    WA.room.onEnterLayer("vudonzone").subscribe(() => {
        currentPopup = WA.ui.openPopup("vudonpopup", 'ВУДОН: Привет, я видел как ночью разбойники закопали клад на участке тетушки Фаи. Попробуй его найти. Но для начала тебе нужно пройти этот лабиринт.', []);
        var mysound = WA.sound.loadSound("gav.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('vudonzone').subscribe(closePopUp);
//КОНЕЦ ПРИМЕРА 1

//НАЧАЛО ПРИМЕРА 2
    WA.room.onEnterLayer("fayazone").subscribe(() => {
        currentPopup = WA.ui.openPopup("fayapopup", 'ФАЯ: Привет, милок! Разбойники? А я то гадала кто мне грядки истоптал. Нет, не видела, но кажется слышала ночью шорох в огороде. Может УГОЛЁК что-то видел...', []);
        var mysound = WA.sound.loadSound("faya.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('fayazone').subscribe(closePopUp);
//КОНЕЦ ПРИМЕРА 2

//НАЧАЛО ПРИМЕРА 3
    WA.room.onEnterLayer("Door3openZone").subscribe(() => {
        currentPopup = WA.ui.openPopup("snakepopup", 'ЖЕЛТОПУЗИК: Без пароля не пущу', []);
        var mysound = WA.sound.loadSound("shhh.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('Door3openZone').subscribe(closePopUp);
//КОНЕЦ ПРИМЕРА 3

//НАЧАЛО ПРИМЕРА 4
    WA.room.onEnterLayer("catzone").subscribe(() => {
        currentPopup = WA.ui.openPopup("catpopup", 'УГОЛЁК: Мяв, поспрашивай в лабиринте, ктонибуть из зверей должен знать код.', []);
        var mysound = WA.sound.loadSound("myu.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('catzone').subscribe(closePopUp);
//КОНЕЦ ПРИМЕРА 4

//НАЧАЛО ПРИМЕРА 5
    WA.room.onEnterLayer("lz1").subscribe(() => {
        currentPopup = WA.ui.openPopup("lp1", 'ТРЕТЬЯ ЦИФРА РАВНА КОЛИЧЕСТВУ ГОРШКОВ', []);
        var mysound = WA.sound.loadSound("kwa.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('lz1').subscribe(closePopUp);
    
//КОНЕЦ ПРИМЕРА 5

//НАЧАЛО ПРИМЕРА 6
    WA.room.onEnterLayer("lz2").subscribe(() => {
        currentPopup = WA.ui.openPopup("lp2", 'ПЕРВАЯ  ЦИФРА БОЛЬШЕ ВТОРОЙ НА ДВА', []);
        var mysound = WA.sound.loadSound("magic.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('lz2').subscribe(closePopUp);
//КОНЕЦ ПРИМЕРА 6

//НАЧАЛО ПРИМЕРА 7
    WA.room.onEnterLayer("lz3").subscribe(() => {
        currentPopup = WA.ui.openPopup("lp3", 'ВТОРАЯ  ЦИФРА РАВНА ЧЕТВЕРТОЙ', []);
        var mysound = WA.sound.loadSound("golub.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('lz3').subscribe(closePopUp);
//КОНЕЦ ПРИМЕРА 7

//НАЧАЛО ПРИМЕРА 8
    WA.room.onEnterLayer("lz4").subscribe(() => {
        currentPopup = WA.ui.openPopup("lp4", 'ЧЕТВЕРТАЯ  ЦИФРА ТРИ.', []);
        var mysound = WA.sound.loadSound("spider.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('lz4').subscribe(closePopUp);
//КОНЕЦ ПРИМЕРА 8

//НАЧАЛО ПРИМЕРА 9
    WA.room.onEnterLayer("childzone").subscribe(() => {
        currentPopup = WA.ui.openPopup("childpopup", 'Ой, вы не дядя Глеб. Но может сможете нам помочь? Мы хотим киндер, но коза съела код от холодильника. Я помню только что в нем было 5 цифр.', []);
        var mysound = WA.sound.loadSound("yarik.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('childzone').subscribe(closePopUp);
//КОНЕЦ ПРИМЕРА 9

//НАЧАЛО ПРИМЕРА 10
    WA.room.onEnterLayer("kozazone").subscribe(() => {
        currentPopup = WA.ui.openPopup("kozapopup", 'Пожнёт награду только тот, кто в мире странности найдет.', []);
        var mysound = WA.sound.loadSound("koza.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('kozazone').subscribe(closePopUp);
//КОНЕЦ ПРИМЕРА 10

//НАЧАЛО ПРИМЕРА 11
    WA.room.onEnterLayer("frogzone").subscribe(() => {
        currentPopup = WA.ui.openPopup("frogpopup", 'Посчитай буквы, ква', []);
        var mysound = WA.sound.loadSound("kwa.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('frogzone').subscribe(closePopUp);
//КОНЕЦ ПРИМЕРА 11

//НАЧАЛО ПРИМЕРА 12
    WA.room.onEnterLayer("Door6openzone").subscribe(() => {
        currentPopup = WA.ui.openPopup("jorapopup", 'ЖОРА: Эй, подожди! Помоги мне сбежать! Это единственное место где нет камер, но я выронил записки с кодом и их унесло ветром. Помоги мне их собрать и открыть калитку. Если справишься, сможешь взять награду из сундука. Я видел что записки унесло в сторону леса.', []);
        var mysound = WA.sound.loadSound("kwa.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('Door6openzone').subscribe(closePopUp);
//КОНЕЦ ПРИМЕРА 12

//НАЧАЛО ПРИМЕРА 13
    WA.room.onEnterLayer("bcatzone").subscribe(() => {
        currentPopup = WA.ui.openPopup("bcatpopup", 'СКОРО ЗДЕСЬ БУДЕТ РАСПИСАНИЕ МЕРОПРИЯТИЯ, А ПОКА: Зима, стоят мужики на остановке. Один достаёт сигарету и грит мол Огоньку не найдётся? Второй достаёт зажигалку, бензиновую, а она протекла по всей куртке. Чиркает, загорается вся рука. Ну а первый закуривает прям от руки: -Ну ты бля фокусник!', []);
        var mysound = WA.sound.loadSound("myu.mp3");
        mysound.play(config);
    });
    WA.room.onLeaveLayer('bcatzone').subscribe(closePopUp);
//КОНЕЦ ПРИМЕРА 13

        WA.room.onEnterLayer("jc1").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы осмотреться",
            callback: () => {
                WA.chat.sendChatMessage("Мятый клочек бумаги с цифрой 1", "Порывшись в траве вы находите")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    
            WA.room.onEnterLayer("jc2").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы осмотреться",
            callback: () => {
                WA.chat.sendChatMessage("Мятый клочек бумаги с цифрой 4", "Засунув руку в дупло вы находите")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    
            WA.room.onEnterLayer("jc3").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы осмотреться",
            callback: () => {
                WA.chat.sendChatMessage("Мятый клочек бумаги с цифрой 2", "Под деревом вы находите")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    
            WA.room.onEnterLayer("jc4").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы осмотреться",
            callback: () => {
                WA.chat.sendChatMessage("Мятый клочек бумаги с цифрой 3", "В птичьем гнзде вы находите")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });

            WA.room.onEnterLayer("jc555").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы осмотреться",
            callback: () => {
                WA.chat.sendChatMessage("Но так ничего и не находите", "Вы перебираете все листья в округе")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 2000)
    });
    
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
