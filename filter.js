// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];


function filterPrice(priceRange) {
    let filteredCourses = [];
    courses.forEach(course => {

//если дана только максимальная желаемая стоимость
        if (priceRange[0] === null) {
            if (priceRange[1] >= course.prices[0]) {
                filteredCourses.push(course);
            }

//если дана только минимальная желаемая стоимость 
        } else if (priceRange[1] === null) {
            if(priceRange[0] <= course.prices[0] || priceRange[0] <= course.prices[1]) {
                filteredCourses.push(course);
            }

//если дана как минимальная, так и максимальная желаемая стоимость
        }else if (priceRange[0] >= course.prices[0] && !(course.prices[1] < priceRange[0]) || (course.prices[0] >= priceRange[0] && course.prices[0] <= priceRange[1])) {
            filteredCourses.push(course);
        } else {
            return courses;
        }
    })
    
    return filteredCourses;
}

// Варианты цен (фильтры), которые ищет пользователь
// let requiredRange1 = [null, 200];
// let requiredRange2 = [100, 350];
// let requiredRange3 = [200, null];
