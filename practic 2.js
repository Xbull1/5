// let a
//
// a = {
//     y:10,
//     a:10
// }
// b = a
// b.y=22
//
// console.log(b);
//
//                             //выраджение и то как их можно изменить
//
// const dada = {
//     city:'tagan',
//     popular:2
// }
// dada['popular']=true
// dada['lydi']='da'
// console.log(dada)
// delete dada["popular"]
// console.log(dada)
// вложенность
// const charaga = {
//     ycheniki:28,
//     vashiYchinikov: {
//         rychka:true,
//         tetrad:'по возмонжости'
//     }
// }
// console.log(charaga.vashiYchinikov)
// delete charaga.vashiYchinikov['rychka']
// console.log(charaga.vashiYchinikov)

// объекты
// const derevia = {
//     klen:110,
//     vidiberez:{
//         bereza1:true,
//         bereza2:22,
//     },
//     Vivodderev() {console.log(derevia.klen + derevia.vidiberez.bereza2);}
// }
// derevia.Vivodderev()
// console.log(derevia.klen + derevia.vidiberez.bereza2);

// мутация объекта без изменения предыдущего объекта(обычно если мутировать объект меняется сразу два значения)
// const person ={
//     lydi:2200,
//     klienti:200
// }
// // в данной строчке мы преобразуем объект person в строчку, а потом обратно в объект
// const person2= JSON.parse(JSON.stringify(person));
// person2.lydi=11
// console.log(person2.lydi)
// console.log(person.lydi)

// функции и возвращение их результатов

// function Num(a,b){
//     let c
//     a = a + 1
//     c = b + a
//     return c
// }
// itog = Num(11,3)
// console.log(itog)


// Изменение объекта внутри функции
// const person = {
//     age:22,
//     name:"bob"
// }
// function NewPersonSozd(pers){
//     const NewPersson = JSON.parse(JSON.stringify(person));
//     NewPersson.age +=55
//     return NewPersson;
// }
// const NewPersson = NewPersonSozd(person);
// console.log(person);
// console.log(NewPersson.age);

// области видимости функции. Мы задаем глобальную переменную a и после указваем ее в локальной фунции если в локальной функции ее нет, то оно будет искать пока не найдет глобальнубю фукнцию
// const a = 22
//
// function pervayaVid() {
//     function VtorayaVid(){
//         console.log(a)
//     }
//     VtorayaVid()
// }
// pervayaVid()

// Область видимости функции, но есть глобальная и локальная переменная
// let a = 10
// let b = 12
// let c = 100
// function Vidimosti() {
//    let b
//     b = a + c
//     console.log(b)
// }
// Vidimosti()
// console.log(b)
// оператор разделения объекита на свойства и выведение данных в таблице
// const button = {
//     width:2000,
//     model: 'block'
// }
// const NewElementButton = {
//     ...button,
//     color:'red'
// }
// console.table(NewElementButton)
// оператор разделения объекита на свойства и выведение данных в таблице, а так же объединение нескольких
// const heros = {
//     pedi:"leri",
//     pedi2:"marka"
// }
// const bluda = {
//     buldak:22,
//     Chiken:true
// }
// const Obchie = {
//     ...heros,
//     kotik:true,
//     ...bluda
// }
// console.table(Obchie);

// const name = "mark";
// const gorod = 'taganrog';
// const text = `всем привет, меня зовут ${name} и я живу в городе ${gorod}`;
// console.log(text);

// задание параметров функции по умолчанию
// function Summator (chislo1, chislo2 = 5) {
//     return chislo1 * chislo2
// }
// console.log(Summator(12,10))
// console.log(Summator(12,))

// значение параметров функции по умолчанию

// const NewPost = (post, adddate = Date()) => ({
//     ...post,
//     adddate
// })
// const postpremn = {
//     author:"mark",
//     id:1488
// }
// console.table(NewPost(postpremn))

// const b = 5
// for (let i = 0; i < b; i++) {
//     console.log('всем привет' + i)
//     if (i > 3){
//         console.log('супер')
//     }
// }

// массивы
// const newarray  =[1,2,3,4,5]
// Megaarray= newarray[3]
// Megaarray = 10
// if(Megaarray >9){
//     console.log('Все норм')
// }
// console.log(newarray)

// изменение массивов
// const newarray  =[1,2,3,4,5]
// newarray[5] = 'abc'
// console.log(newarray)
// newarray[6] = [52,43,21]
// console.log(newarray)

// спосообы изменения массивов
// // добавление в конце массива
// const newarray  =[1,2,3,4,5]
// newarray.push(6)
// console.log(newarray)
// newarray.push('abc')
// console.log(newarray)
// добавление элементов в начале
// const newarray  =[1,2,3,4,5]
// newarray.unshift(0)
// console.log(newarray)
// newarray.unshift('abc')
// console.log(newarray)
// удаление элемента массива
// const newarray  =[1,2,3,4,5]
// newarray.pop()
// console.log(newarray)
// добавление элемента в начало списка
// const newarray  =[1,2,3,4,5]
// newarray.unshift(true)
// console.log(newarray)
// изменение каждого объекта в массиве
// const newarray  =[1,2,3,4,5]
// console.log(newarray)
// newarray.forEach((item) => console.log(item*5))
// изменение каждого объекта в массиве, но значения возвращаются
// const Myarray  =[1,2,3,4,5]
// console.log(Myarray)
// const NewArray = Myarray.map(element => element *5)
// console.log(NewArray)

// разложение объектов на свойства
// const Kelimang = {
//     Name:'mark',
//     Familia:'georgi',
//     Vozrast:19
// }
// const{Name,Familia}=Kelimang;
// const{Vozrast}=Kelimang;
// console.log(Vozrast);
// console.log(Familia);

// разложение массивов на элементы, разлолжение создается в зависимости от количества переменннррых которые написаны в списке
// const spisok = [1,2,3,4,5]
// console.log(spisok)
// const[Object1, Object2,Object3 ] = spisok
// console.log(Object1)
// console.log(Object2)
// console.log(Object3)

// разложение на элементы фунции
// const dnevnik = {
//     firstPolzov: 'bogdia',
//     firstPolzovId:1,
//     secondPolzov: 'mark',
//     secondPolzovId:2,
//     thirdPolzov: 'bog',
//     thirdPolzov:3
// };
//
// const izvlekPolz = ({ firstPolzov, secondPolzov, thirdPolzov,firstPolzovId, secondPolzovId, thirdPolzovId }) => {
//     if (!firstPolzov) {
//         return "пользователь не найден"
//     }
//     return "пользователь " + firstPolzov + " найден, его ID " + secondPolzovId;
// }
// console.log(izvlekPolz(dnevnik));

// Операторы
// если
// const Podiki = {
//     vaka:false,
//     geekbar:true,
//     upiter:true
// }
// if (vaka=true) {
//     console.log("такой товар есть")
// }
// else {
//     console.log("товар отсутсвует ")
// }
// if (!Podiki.hqd) {
//     console.log('позиции не существует')
// }
// если в функциях( мы проверяем какие значения ввел пользователь)
// const chisla = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'одно из введенных значений не число'
//     }
//     else if (a % 2 !==0 || b % 2 !== 0) {
//         return 'число не четное'
//     }
//     else {
//         console.log("число четное " + a+b);
//     }
// }
// const result = chisla(2, 2)
// console.log(result)

// switch

// const Ochenka = 3;
//
// switch (Ochenka) {
//     case 1:
//         console.log('кол');
//         break;
//     case 2:
//         console.log('двойка');
//         break;
//     case 3:
//         console.log('тройка');
//         break;
//     case 4:
//         console.log('хорошо');
//         break;
//     case 5:
//         console.log('отлично');
//         break;
//     default:
//         console.log('неизвестная оценка');
// }

// ЦИКЛЫ
// цикл for
// for (i = 0; i < 4; i++) {
//     console.log(i);
// }
// цикл while
// let i = 5
// while(i<10){
//     console.log(i)
//     i++
// }
// цикл do while выполняется хотябы один раз даже если условие ложное(поиграйся со знаком >)
// let i = 5
// do {
//     console.log(i)
//     i++
// }while(i>10)
// цикл for in
// const object = {
//     password:1448,
//     login:'salfetka1',
//     id:228
// }
// for (let key in object) {
//     console.log(key, object[key])
// }

// практика
// var countSheep = function (num){
//     let itog = " "
//     if(num>0){
//         for(let i = 1; i <=num ; i++ ){
//             itog += i.toString() + " sheep..."}
//         return itog}
//     else{
//         return ""
//     }
// }
// console.log(countSheep(3))
// function getGrade (s1, s2, s3) {
//     let itog = ''
//     let srednee = (s1 + s2 + s3)/3
//     console.log(srednee)
//     if(srednee >=90){
//         itog='A'
//     }
//     else if(srednee<90 && srednee >=80){
//         itog='B'}
//     else if(srednee<80 && srednee >=70){
//         itog='C'}
//     else if(srednee<70 && srednee >=60){
//         itog='D'}
//     else if(srednee<60 && srednee >=0){
//         itog='F'}
//     return itog
// }
// console.log(getGrade(68,50,50))
// var maxNum = [5, -1, 40, 355, 17, 3];
// var max = maxNum[0];
//
// for (var i = 1; i < maxNum.length; i++) {
//     if (maxNum[i] > max) {
//         max = maxNum[i];
//     }
// }
//
// console.log(max);
// function minMax(arr){
//     let Max = arr[0]
//     let Min = arr[0]
//     for(i = 1; i<arr.length; i++){
//         if(Max<arr[i]){
//             Max = arr[i]
//         }
//         if(Min>arr[i]){
//             Min = arr[i]
//         }
//     }
//     return [Min, Max]
//
// }
// console.log(minMax([1,6,3]))

// function removeSmallest(numbers) {
//     if (numbers.length === 0) {
//         return []
//     }
//     const arrayCopy = JSON.parse(JSON.stringify(numbers))
//     const min = Math.min(...arrayCopy)
//     const minindex = arrayCopy.indexOf(min)
//     arrayCopy.splice(minindex, 1)
//     return arrayCopy
// }
// console.log(removeSmallest([3,4,5,6,7,8,9]))

// function printerError(s) {
//     const dopsim = "abcdefghijklm"
//     let error = 0
//     for(let char of s){
//         if (!dopsim.includes(char)){
//             error+=1
//         }
//     }
//     return `${error}/${s.length}`;
// }
// console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))

// function likes(names) {
//     const arrlenght = names.length
//     if (arrlenght === 0){
//         return "no one likes this"
//     }
//     else if (arrlenght === 1){
//         return `${names[0]}likes this`;
//     }
//     else if (arrlenght === 2){
//         return `${names[0]} and ${names[1]} likes this`;
//     }
//     else if (arrlenght === 3){
//         return `${names[0]},${names[1]} and ${names[2]} likes this`;
//     }
//     else if (arrlenght >3){
//         return `${names[0]},${names[1]}  and ${arrlenght - 2} others like this`;
//     }
// }
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))

// function buildTower(nFloors) {
//     const tower = [];
//     for (let i = 0; i < nFloors; i++) {
//         const spaces = ' '.repeat(nFloors - i - 1);
//         const stars = '*'.repeat(2 * i + 1);
//         tower.push(spaces + stars + spaces);
//     }
//     return tower;
// }
//
//
// console.log(buildTower(3));
// console.log(buildTower(5));
// function removeExclamationMarks(s) {
//     return s.replace(/!/,"")
// }
// console.log(removeExclamationMarks('Hello World!'))

// function getMiddle(s) {
//     if (s.length % 2 === 0) {
//         let middleIndex = s.length / 2;
//         return s.slice(middleIndex - 1, middleIndex + 1);
//     } else {
//         let middleIndex = Math.floor(s.length / 2);
//         return s.charAt(middleIndex);
//     }
// }
//
// console.log(getMiddle("l"));

// function arrayDiff(a, b) {
//     const a1 = a
//     const b1 = b
//     for (let i = 0; i < a1.length; i++) {
//         for (let j = 0; j < b1.length; j++) {
//             if(a1[i]===b1[j]){
//                 a1.splice(i,1);
//
//             }
//         }
//     }
//     console.log(a1);
//     return a1;
// }
// arrayDiff([1,2,3,4,4],[4,5,6,7,8,9,10]);

// function openOrSenior(data){
//     let result =[]
//     for(let i=0;i<data.length;i++){
//         const member = data[i][0];
//         const staz = data[i][1];
//         if(member>=55 && staz>7){
//             result.push("Senior");
//         }
//         else{
//             result.push("Open");
//         }
//     }
//     return result;
// }
// console.log(openOrSenior([[61,12],[12 , 12]]));

// function sayHello(name) {
//     return 'Hello, ' + name
// }
// console.log(sayHello('Mr dodi'))
// function squareDigits(num){
//     let result = ""
//     let numStr = num.toString();
//     for (let i = 0; i < numStr.length; i++){
//         result += numStr[i]*numStr[i]
//     }
//     return Number(result);
// }
// console.log(squareDigits(765 ))

// function testEven(n) {
//     if ( n % 2 == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(testEven(7));
//
// function between(a, b) {
//     let result = []
//     for (let i=a; i<=b; i++){
//         result.push(i)
//     }
//     return result
// }
// console.log(between(1,4))

// function feast(beast, dish) {
//     if (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length-1)) {
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(feast('kerewrw','kktktkttkw'))

// function generateRange(min, max, step){
//     let result = []
//     for( let i = min; i <= max; i+=step ){
//         result.push(i)
//     }
//     return result
// }
// console.log(generateRange(1,10,2))

// function sumMix(x) {
//    let i1 = 0
//     for (let i = 0; i < x.length; i++) {
//         i1 += Number(x[i]); // Преобразуем элемент массива в число
//
//     }
//     console.log(i1);
// }
//
// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]);

// function removeChar(str){
//     return str.slice(1,str.length-1)
//
// };
// console.log(removeChar("atyttu"));

// function powersOfTwo(n){
//     let result = []
//     for(let i = 0;i<=n;i++){
//         result.push(2*i)
//     }
//     return result
// }

// function splitStringToArray(str) {
//
//     return str.split(/\s+/);
// }
//
// const inputString = "Привет, как дела?";
// const wordsArray = splitStringToArray(inputString);
// console.log(wordsArray)

// function findUniq(arr) {
//     let result = []
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i+1]) {
//
//         }
//     }
// }


// function points(games) {
//     let results = 0
//     for (let i = 0; i < games.length; i++) {
//         let game = games[i].split(':')
//         let A = parseInt(game[0]);
//         let B = parseInt(game[1]);
//         if(A>B){
//             results+=3
//         }
//         else if(A === B){
//             results+=1
//         }
//     }
//     return results;
// }
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));

// function duplicateEncode(word){
//     const WordLower = word.toLowerCase();
//     let dublicate = {}
//     let result = ''
//     for (let char of WordLower) {
//         if(dublicate[char] === undefined) {
//             dublicate[char] = 1;
//         }
//         else{
//             dublicate[char]+=1;
//         }
//     }
//     for (let char of WordLower) {
//         if(dublicate[char] === 1) {
//             result += '('
//         }
//         else if (dublicate[char] >= 1) {
//             result += ')'
//         }
//     }
//     return result;
// }
// console.log(duplicateEncode("Success"));

// function onlyDuplicates(str) {
//     const lower = str.toLowerCase();
//     const duplicateCount = {};
//     let result = '';
//
//
//     for (let char of lower) {
//         if (duplicateCount[char] === undefined) {
//             duplicateCount[char] = 1;
//         } else {
//             duplicateCount[char] += 1;
//         }
//     }
//
//
//     for (let char of lower) {
//         if (duplicateCount[char] > 1) {
//             result += char;
//         }
//     }
//
//     return result;
// }
// console.log(onlyDuplicates('abcecedefee'))

// function makeUpperCase(str) {
//     let upper = str.toUpperCase()
//     return upper
// }
// console.log(makeUpperCase('John'))

// function solution(nums){
//     if(nums === null){
//         return []
//     }
//     else if(nums.length === 0){
//         return []
//     }
//     else {return nums.sort((a,b)=> a-b);}
// }
// console.log(solution([]));

// const sequenceSum = (begin, end, step) => {
//     let result = 0
//    for (let i = begin; i <= end; i += step) {
//        result += i
//    }
//    return result
// };
// console.log(sequenceSum(1,5,1))

// function finalGrade (exam, projects) {
//     if(exam>90 && projects>10){
//         return 100
//     }
//     else if(exam>75 && projects>=5){
//         return 90
//     }
//     else if(exam>50 && projects>=5){
//         return 75
//     }
//     else{
//         return 0
//     }
// }
// console.log(finalGrade(100,12))

// function longest(s1, s2) {
//     const strglav = s1 + s2
//     const uniqueChars = new Set(strglav);
//     let uniqueChars1=  Array.from(uniqueChars).join('')
//     return uniqueChars1.split('').sort().join('')
//
// }
// console.log(longest("aretheyhere", "yestheyarehere"));

// function noSpace(x){
//     let peritog = x.split(" ")
//     return peritog.splice(' ').join("")
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

// function sortByLength (array) {
// const NewArray = array.sort((a,b) => a.length-b.length);
//     return NewArray;
// }
// console.log(sortByLength(["Beg", "Life", "I", "To"]));

// function expandedForm(num) {
//     return num.length;
// }
// console.log(expandedForm('3323'))

// function findShot(s){
//     let arr = s.split(' ');
//     let min = arr[0]
//     for(const item of arr){
//        if (item.length < min.length){
//            min = item;
//        }
//     }
//     return min;
// }
// console.log(findShot('travel abroad shall we'))

// var isSquare = function(n){
//     const l = Math.sqrt(n)
//     return  Number.isInteger(l)
// }
// console.log(isSquare(25))

// function gimme (triplet) {
//     if(triplet[0]<triplet[1]&&triplet[1]<triplet[2]){
//         return 1
//     }
//     else{
//         return 0
//     }
// }

// var uniqueInOrder=function(iterable){
//     let result = [];
//     for (let i = 0; i < iterable.length; i++) {
//         if(iterable[i]!==iterable[i+1]){
//             result.push(iterable[i]);
//         }
//
//     }
// return result;
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// function wave(str) {
//     let result = []
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] !== ' ') {
//         let chars = str.split('')
//         chars[i] = chars[i].toUpperCase()
//         result.push(chars.join(''))
//     }
//     }
//     return result
// }
// console.log(wave('codewars'));

// function smallEnough(a, limit){
//     for(let i=0; i<=a.length;i++){
//         if(a[i]>limit){
//             return false
//         }
//     }
// return true
// }
// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));

// function getSum(a, b)
// {
//     let result = 0
//    if(a===b){
//        result = a
//    }
//        if(a<b){
//        for(let i=a; i<=b; i++){
//            result +=i
//        }
//    }
//        if(a>b){
//            for(let i=a; i>=b; i--){
//                result +=i}
//        }
//
//
// return result
// }
// console.log(getSum(9,9))

// function diamond(n) {
//     let itog = '';
//     if (n <= 0 || n %2 === 0) {
//         return null;
//     }
//     const srednee = Math.ceil(n / 2);
//
//     for (let i = 1; i <= srednee; i++) {
//         itog += ' '.repeat(srednee - i) + '*'.repeat(2 * i - 1) + '\n';
//     }
//     for (let i = srednee - 1; i >= 1; i--) {
//         itog += ' '.repeat(srednee - i) + '*'.repeat(2 * i - 1) + '\n';
//     }
//     return itog;
// }
// console.log(diamond(3));

// function solution(string) {
//     let result = ''
//     for (let i = 0; i < string.length; i++) {
//         let char = string[i]
//         if(char === char.toUpperCase()) {
//             result += " " + char
//         }
//         else{
//             result += char
//         }
//     }
//     return result
// }
// console.log(solution('camelCase'))
//
// function deleteNth(arr,n){
//     const count = {};
//     const result = [];
//
//     for (let num of arr) {
//         if (count[num]) {
//             if (count[num] < n) {
//                 result.push(num);
//                 count[num] += 1;
//             }
//         } else {
//             result.push(num);
//             count[num] = 1;
//         }
//     }
//
//     return result;
// }
//
// console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2))

// function hero(bullets, dragons){
//     if(dragons*2 <= bullets){
//     return true
// }
// else{
//     return false
// }
// }

// function expressionMatter(a, b, c) {
//     let max = []
//     max.push(a * (b + c))
//     max.push(a * b * c)
//     max.push(a + b * c)
//     max.push((a+b)*c)
//     return Math.max(...max)
// }
// console.log(expressionMatter(2, 3,5))

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     let itog = dadYearsOld-(sonYearsOld*2);
//     if(itog<0){
//         return itog*-1;
//     }
//     else return itog;
// }

// function comp(array1, array2){
//     if(array1.length !== array2.length){
//         return false
//     }
//     if(array1.length===0 || array2.length===0){
//         return null
//     }
//     else{
//         for(let i = 0; i < array1.length; i++){
//             if(array1[i] !== array2[i]**2){
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));

// function checkForFactor (base, factor) {
//     if(base%factor===0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// function positiveSum(arr) {
//     if (arr.length === 0){return 0;}
//     let result = 0
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] >=0){
//         result += arr[i]
//     }
// }
// return result;
// }

// function findOdd(A) {
//     let podchet = {}
//     for (let char of A) {
//         if(podchet[char]===undefined) {
//             podchet[char] = 1;
//         }
//         else{
//             podchet[char] += 1;
//         }
//     }
//     for(let char of A) {
//         if(podchet[char]%2!==0) {
//             return char;
//         }
//     }
// }
// console.log(findOdd([0]));

// function pipeFix(numbers) {
//     let result = [];
//     for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
//         result.push(i);
//     }
//     return result;
// }
// console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));

// function nameShuffler(str){
// let result = str.split(' ').reverse().join(' ');
//    return result;
// }
// console.log(nameShuffler('John Smith'));

// function peopleWithAgeDrink(old) {
// if (old <14) {
//     return "drink toddy"
// }
// else if (old >14 || old < 18) {
//     return "drink coke"
// }
// else if (old >18 || old < 21) {
//     return "drink beer"}
// else{
// return "drink whisky"
// }
// }

// function reverseLetter(str) {
//   return str.replace(/\W/g, '').split('').reverse().join('');
//
// }
// console.log(reverseLetter("ruodk|d(dc-viro5tr|_en$dw*c(brb}frfk|duk+myqlgp" ))

// function sumDigPow(a, b) {
//     let result = [];
//
//     for (let i = a; i < b; i += 1) {
//         let promezh = 0;
//         let digits = i.toString();
//
//         for (let j = 0; j < digits.length; j += 1) {
//             let digit = parseInt(digits.charAt(j), 10);
//             promezh += digit ** (j + 1);
//         }
//
//         if (promezh === i) {
//             result.push(i);
//         }
//     }
//
//     return result;
// }
//
// console.log(sumDigPow(1, 100));

// function getFirstDigit(num) {
//     return parseInt(num.toString().charAt(3));
// }
//
// console.log(getFirstDigit(12345)); // Вывод: 1
// console.log(getFirstDigit(98765)); // Вывод: 9

// function findEvenIndex(arr)
// {
//     let result = []
//
//    for (let i = 1; i < arr.length -1; i++){
//        let sum1 = 0
//        let sum2 = 0
//        for (let j = i - 1; j > 0; j--){
//            sum1 += arr[j]
//        }
//        for (let l = i+1; l < arr.length -1; l++){
//            sum2 += arr[l]
//        }
//        if(sum1===sum2){
//            result.push(i)
//        }
//    }
//    if (result.length>0){
//        return result[0]
//    }
//    else{
//        return -1
//    }
// }
// console.log(findEvenIndex([1,2,3,4,3,2,1]))

// function multiplicationTable(size) {
//     let result = [];
//
//     // Создаем массив с числами от 1 до size
//     for (let i = 1; i <= size; i++) {
//         let multi = []; // Создаем новый массив для строки таблицы
//         for (let j = 1; j <= size; j++) {
//             multi.push(i * j); // Умножаем i на j и добавляем в строку
//         }
//         result.push(multi); // Добавляем строку в результат
//     }
//
//     return result;
// }
//
// console.log(multiplicationTable(3));





