//-	Создайте переменную a и присвойте ей значение 3. Выведите значение этой переменной на экран.

let a = 3;
console.log(a)

/*Создайте переменные a=10 и b=2. 
Выведите на экран их сумму, разность, произведение и частное (результат деления).
*/

let aa = 10, b = 2;
console.log(`Сумма: ${aa + b}`)
console.log(`Разность: ${aa - b}`)
console.log(`Произведение: ${aa * b}`)
console.log(`Частное: ${aa / b}`)

/* Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. 
Выведите на экран значение переменной result.
*/

let c = 15, d = 2
let result = c + d
console.log(result)

/*Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
*/

let aaa = 10, bbb = 2, ccc = 5;
console.log(aaa + bbb + ccc);

/*Создайте переменные a=17 и b=10.
 Отнимите от a переменную b и результат присвойте переменной c.
  Затем создайте переменную d, присвойте ей значение 7. 
  Сложите переменные c и d, а результат запишите в переменную result. 
  Выведите на экран значение переменной result.*/

  let aaaa = 17, bbbb = 10;
let cccc = aaaa - bbbb;
let dddd = 7;
let result4 = cccc + dddd;
console.log(result4)

/*Создайте переменную text и присвойте ей значение 'Привет, Мир!'. 
Выведите значение этой переменной на экран.
*/

let text = 'Привет, Мир!';
console.log(text)

/*Создайте переменные text1='Привет, ' и text2='Мир!'. 
С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.
*/

let text1 = 'Привет, ', text2 = 'Мир!';
console.log(text1 + text2)

/*Напишите скрипт, который считает количество секунд в часе, сутках, неделе, месяце из 30 дней
*/

const secondsInHour = 60 * 60
const secondsInDay = secondsInHour * 24
const secondsInWeek = secondsInDay * 7
const secondsInMonth = secondsInDay * 30

console.log(`Количество секунд в часе: ${secondsInHour}`)
console.log(`Количество секунд в сутках: ${secondsInDay}`)
console.log(`Количество секунд в неделе: ${secondsInWeek}`)
console.log(`Количество секунд в месяце (30 дней): ${secondsInMonth}`)

/* Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --.
 Количество строк кода при этом не должно измениться! 
 */

 let num = 1
 ++num
 --num 
 num *= 5
 num /= 7
 num += 12
 num -= 14 
console.log(num)

/*5	Создайте три переменные - час, минута, секунда. 
С их помощью выведите текущее время в формате 'час:минута:секунда'.
*/

const now = new Date()
const hour = now.getHours().toString().padStart(2, '0')
const minute = now.getMinutes().toString().padStart(2, '0')
const second = now.getSeconds().toString().padStart(2, '0')

console.log(`${hour}:${minute}:${second}`)

/*Переделайте этот код так, чтобы в нем использовалась операция +=. 
Количество строк кода при этом не должно измениться!
*/

let textt = 'Я'
textt += ' хочу'
textt += ' знать'
textt += ' JS!'
console.log(text)

/*Задана переменная foo = 'bar'; Создать переменную bar, в которой будет храниться число 10. 
Вывести число 10, используя только переменную foo
*/

let foo = 'bar'
let bar = 10
foo += bar
console.log(foo)

/*Даны два числа. Найти их сумму и произведение.
*/
let aaaaa = 5
let bbbbb = 3
let sum = aaaaa + bbbbb
let product = aaaaa * bbbbb
console.log("Сумма: " + sum)
console.log("Произведение: " + product)

/*Даны два числа. Найдите сумму их квадратов.
*/
let a1 = 4
let b1 = 5
let sumSquares = a1 ** 2 + b1 ** 2
console.log("Сумма квадратов: " + sumSquares)

/*Даны три числа. Найдите их среднее арифметическое.
*/

let a2 = 2
let b2 = 3
let c2 = 4
let average = (a2 + b2 + c2) / 3
console.log("Среднее арифметическое: " + average)

/*Даны три числа x,y и z. Найдите (x+1)−2(z−2x+y)
*/

let x = 3
let y = 4
let z = 5
let result1 = x + 1 - 2 * (z - 2 * x + y)
console.log(result1);

/*Дано натуральное число. 
Найдите остатки от деления этих чисел на 3 и на 5. 
Дано число. Увеличьте его на 30%, на 120%.
*/

let n = 15
let rm3 = n % 3
let rm5 = n % 5
console.log("Остаток от деления на 3: " + rm3)
console.log("Остаток от деления на 5: " + rm5)

n *= 1.3
console.log("Увеличение на 30%: " + n)

n *= 2.2
console.log("Увеличение на 120%: " + n)

/*Дано два числа. 
Найдите сумму 40% от первого числа и 84% от второго числа.
*/

let a3 = 1700
let b3 = 2500
let sum1 = a3 * 0.4 + b3 * 0.84
console.log("Сумма: " + sum1)

/*Дано трехзначное число. Найдите сумму его цифр.
*/

let number = 123
let digit1 = Math.floor(number / 100)
let digit2 = Math.floor((number % 100) / 10)
let digit3 = number % 10
let sum2 = digit1 + digit2 + digit3
console.log("Сумма цифр: " + sum)

/*9
*/
let a4 = 1;
let b4 = 3;

console.log(a4++ + b4)
console.log(a4 + ++b4)
console.log(++a4 + b4++) 
console.log(a4, b4)

/*10
*/

const age = 18
const hasPassport = true
const isSixteen = false

const canDrinkAlcohol = age >= 21 ? 'can drink alcohol' : 'can`t drink alcohol'
const canTravelAbroad = hasPassport ? 'can across the borderline' : 'can`t across the borderline'
const canGetDriverLicense = isSixteen ? 'can get a drivecard' : 'can`t get drivecard'

console.log(canTravelAbroad)


/* задача деление по модулю
определить какое число четное или не четное. Реализовать через тернарную операцию.
*/


let num3 = 10;
let evenOrOdd = num3 % 2 === 0 ? 'четное' : 'нечетное';
console.log(`Число ${num3} - ${evenOrOdd}`)
