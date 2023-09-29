const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const listContainNew = $('.product-list-new')
const listContainBest = $('.product-list-best')

const previousNew = $('.section-new .prev')
const nextNew = $('.section-new .next')

const previousBest = $('.section-best-seller .prev')
const nextBest = $('.section-best-seller .next')

previousNew.addEventListener('click', () => {
    listContainNew.scrollBy({
        left: -100,
        behavior: 'smooth',
    });
});

nextNew.addEventListener('click', () => {
    listContainNew.scrollBy({
        left: 100,
        behavior: 'smooth',
    });
});

previousBest.addEventListener('click', () => {
    listContainBest.scrollBy({
        left: -100,
        behavior: 'smooth',
    });
});

nextBest.addEventListener('click', () => {
    listContainBest.scrollBy({
        left: 100,
        behavior: 'smooth',
    });
});