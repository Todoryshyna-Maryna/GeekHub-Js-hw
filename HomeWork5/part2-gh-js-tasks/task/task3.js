'use strict';

/**
 * Слишком длинные слова
 *
 * Иногда некоторые слова вроде «localization» или «internationalization» настолько длинны,
 * что их весьма утомительно писать много раз в каком либо тексте.
 *
 * Будем считать слово слишком длинным, если его длина строго больше 10 символов.
 * Все слишком длинные слова можно заменить специальной аббревиатурой.
 *
 * Эта аббревиатура строится следующим образом: записывается первая и последняя буква слова,
 * а между ними — количество букв между первой и последней буквой (в десятичной системе счисления и без ведущих нулей).
 *
 * Таком образом, «localization» запишется как «l10n», а «internationalization» как «i18n».
 *
 * Вам предлагается автоматизировать процесс замены слов на аббревиатуры.
 * При этом все слишком длинные слова должны быть заменены аббревиатурой, а слова, не являющиеся слишком длинными,
 * должны остаться без изменений.
 */

var longWordTests = [
    {
        parameters: ["localization"],
        expectedResult: "l10n"
    },
    {
        parameters: ["internationalization"],
        expectedResult: "i18n"
    },
    {
        parameters: ["word"],
        expectedResult: "word"
    },
    //added
    {
        parameters: [""],
        expectedResult: ""
    },
    {
        parameters: ["1"],
        expectedResult: "1"
    }
];


function longWord(word) {
    var result = '',
        arr = [];

    if (word.length >= 10) {

        for (var i = 0; i < word.length; i++) {
            arr[i] = word.charAt(i);
        }

        result += arr[0] + (arr.length - 2) + arr[arr.length - 1];

    } else if (word.length<10){
        result = word;
    }
    return result;
}


tasks.push({
    title: "Слишком длинные слова",
    solution: longWord,
    tests: longWordTests
});
