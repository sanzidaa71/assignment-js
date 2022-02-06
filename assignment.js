// ana to vori


function anaToVori(number) {
    let totalVori = number / 16;
    return totalVori;
}
let result = anaToVori(48);
console.log(result);





// // pandaCost 2nd problem

function pandaCost(shinggara1, samusa, jilabi) {
    let result1 = shinggara1 * 7;
    let result2 = samusa * 10;
    let result3 = jilabi * 15;
    let totalResult = result1 + result2 + result3;
    return totalResult;
}
const allAmmount = pandaCost(3, 6, 7);
console.log(allAmmount);




// picnicBudget 3rd problem

function picnicBudget(Budget) {
    const first100peramount = 5000;
    const second100peramount = 4000;
    if (Budget <= 100) {
        const count = Budget * first100peramount;
        return count;
    }
    else if (Budget <= 200) {
        const fast100 = 100 * first100peramount;
        const restBudget = Budget - 100;
        const second100 = restBudget * second100peramount;
        const totalamount = fast100 + second100;
        return totalamount;

    }

    if (Budget <= 200) {
        const fast100 = 100 * first100peramount;
        const restBudget = Budget - 100;
        const second100 = restBudget * second100peramount;
        const totalamount = fast100 + second100;
        return totalamount;

    }
}
const picnic = picnicBudget(5)
console.log(picnic);
