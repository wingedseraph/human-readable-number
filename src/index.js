module.exports = function toReadable(number) {
    function getNumberWord(num) {
        const digits = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ];
        const teen = [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ];
        if (num < 10) return digits[num];
        if (num >= 10 && num < 20) return teen[num - 10];
    }

    function getTensWord(num) {
        const tens = [
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ];

        if (num >= 20 && num < 100) {
            const firstPart = tens[Math.floor(num / 10 - 2)];
            const secondPart = num % 10 !== 0 ? getNumberWord(num % 10) : "";
            return `${firstPart} ${secondPart}`.trim();
        }
    }
    function getHundredsWord(num) {
        const hundred = [
            "one hundred",
            "two hundred",
            "three hundred",
            "four hundred",
            "five hundred",
            "six hundred",
            "seven hundred",
            "eight hundred",
            "nine hundred",
        ];

        const hundredPart = hundred[Math.floor(num / 100) - 1];
        const part = num % 100;
        const remainderWord = part !== 0 ? toReadable(part) : "";
        return `${hundredPart} ${remainderWord}`.trim();
    }

    if (number < 20) return getNumberWord(number);
    if (number < 100) return getTensWord(number);
    if (number < 1000) return getHundredsWord(number);
};
