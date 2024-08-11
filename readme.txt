Don’t forget to commit early & often! You can reference the Commit Messages lesson here!

Here are some use cases (abilities your project needs to have):

Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console.
add
subtract
multiply
divide
A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.
Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
Do not worry about wiring up the JS just yet.
There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
Add a “clear” button.
Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.
You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
Gotchas: watch out for and fix these bugs if they show up in your code:
Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-). An example of the behavior we’re looking for can be seen in this student’s calculator live preview.
You should round answers with long decimals so that they don’t overflow the screen.
Pressing = before entering all of the numbers or an operator could cause problems!
Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”
Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
Extra credit
Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
Add a “backspace” button, so the user can undo if they click the wrong number.
Add keyboard support!


Не забывайте фиксировать сообщения заранее и почаще! Вы можете ознакомиться с уроком по фиксации сообщений здесь!

Вот несколько вариантов использования (возможности, которыми должен обладать ваш проект).:

Ваш калькулятор будет содержать функции для всех основных математических операций, которые вы обычно найдете в калькуляторах, поэтому начните с создания функций для следующих элементов и тестирования их в консоли вашего браузера.
сложение
, вычитание
, умножение
, деление
Операция калькулятора будет состоять из числа, оператора и другого числа. Например, 3 + 5. Создайте три переменные для каждой части операции калькулятора. Создайте переменную для первого числа, оператора и второго числа. Вы будете использовать эти переменные для обновления вашего дисплея позже.
Создайте новую функцию operate, которая использует оператор и 2 цифры, а затем вызывает одну из вышеуказанных функций для чисел.
Создайте простой HTML-калькулятор с кнопками для каждой цифры, каждой из вышеперечисленных функций и клавишей “Равно”.
Пока не беспокойтесь о подключении JS.
Также должен быть дисплей для калькулятора. Заполните его несколькими фиктивными числами, чтобы он выглядел корректно.
Добавьте кнопку “очистить”.
Создайте функции, которые будут отображаться на дисплее при нажатии цифровых кнопок. Вы должны сохранить "отображаемое значение" в какой-нибудь переменной, чтобы использовать его на следующем шаге.
Запустите калькулятор! Вам нужно будет сохранить первое и второе число, которые вводятся в калькулятор, использовать оператор, выбранный пользователем, а затем выполнить операцию () над двумя числами, когда пользователь нажимает клавишу “=”.
У вас уже должен быть код, который может заполнить дисплей, поэтому, как только будет вызвана функция operate(), обновите дисплей, указав "решение" для этой операции.
Это самая сложная часть проекта. Вам нужно выяснить, как сохранить все значения и вызвать с их помощью функцию operate. Не расстраивайтесь, если вам потребуется некоторое время, чтобы разобраться в логике.
Подводные камни: следите за этими ошибками и исправляйте их, если они обнаруживаются в вашем коде:
Ваш калькулятор не должен вычислять более одной пары чисел одновременно. Пример: вы нажимаете цифровую кнопку (12), затем кнопку оператора (+), вторую цифровую кнопку (7) и, наконец, вторую операторскую кнопку (-). Затем ваш калькулятор должен выполнить следующее: во-первых, вычислить первую пару чисел (12 + 7), во-вторых, отобразить результат этого вычисления (19) и, наконец, использовать этот результат (19) в качестве первого числа в вашем новом вычислении вместе со следующим оператором (-).. Пример поведения, которое мы ищем, можно увидеть в этом онлайн-просмотре студенческого калькулятора.
Ответы следует округлять большими десятичными знаками, чтобы они не заполняли экран.
Нажатие кнопки = перед вводом всех цифр или оператора может вызвать проблемы!
Нажатие кнопки “очистить” приведет к удалению всех существующих данных. Убедитесь, что пользователь действительно начинает с нуля после нажатия кнопки “очистить”.
Отобразите странное сообщение об ошибке, если пользователь попытается разделить на 0 ... и не допустите, чтобы ваш калькулятор вышел из строя!
Дополнительный зачет
Пользователи могут получать числа с плавающей запятой, если они произведут необходимые для этого математические вычисления, но они пока не могут их вводить. Добавьте кнопку . и разрешите пользователям вводить десятичные дроби! Убедитесь, что вы не разрешаете им вводить более одной: 12.3.56.5. С такими числами сложно производить математические вычисления. (отключите десятичную кнопку, если она уже есть на дисплее)
Сделайте так, чтобы она выглядела красиво! Это отличный проект для отработки навыков работы с CSS. По крайней мере, сделайте так, чтобы цвет операций отличался от цвета кнопок на клавиатуре.
Добавьте кнопку “пробел назад”, чтобы пользователь мог отменить ввод, если он нажмет неправильный номер.
Добавьте поддержку клавиатуры!