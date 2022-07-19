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
    
    WA.room.onEnterLayer("zzzz").subscribe(() => {
        var triggerMessage = WA.ui.displayActionMessage({
            message: "нажми ПРОБЕЛ чтобы осмотреть место",
            callback: () => {
                WA.chat.sendChatMessage("Холодное, как лед, Не дышит, но живет Всегда кольчугу носит И пьет, хоть пить не просит.", "В траве вы находите странную табличку с цифрой 1 и надписью")
            }
        });
        setTimeout(() => {
            triggerMessage.remove();
        }, 3000)
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
