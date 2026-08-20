function add_numbers_from_list(array: number[]): number {
    let sum: number = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function create_n_numbers_array(n: number): number[] {
    let nums: number[] = [];

    for (let i = 0; i < n; i++) {
        nums[i] = Math.floor(Math.random() * 100);
    }

    return nums;
}

let nums_1: number[] = create_n_numbers_array(5);
let nums_2: number[] = create_n_numbers_array(1500)

console.log(`Para el array [${nums_1}], la suma total es de: ` + add_numbers_from_list(nums_1));
console.log(`Para el array 2, la suma total es de: ` + add_numbers_from_list(nums_2));

