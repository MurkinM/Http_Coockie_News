let news = [
    {
        title: 'Нейт Диаз подерется с Лионом Эдвардсом на UFC 263',
        content: 'На UFC 263 прославленный стоктонский "Гангстер" Нейт Диаз будет драться, с номером 3 рейтинга полусреднего веса Лионом Эдвардсом!',
        lang: 'ru',
        id: '1'   
    },
    {
        title: 'Нейт Диаз Лион Эдвардс менен UFC 263 турниринде күрөшөт',
        content: 'UFC 263те белгилүү Стоктон "Гангстер" Нейт Диас No3 орто салмактагы Лион Эдвардс менен беттешет!',
        lang: 'kg', 
        id: '2' 
    },
    { 
        title: 'Nate Diaz will fight Lyon Edwards at UFC 263',
        content: 'At UFC 263, renowned Stockton “Gangster” Nate Diaz will fight with No. 3 welterweight conttender Lyon Edwards!',
        lang: 'en', 
        id: '3'
    }
];

exports.getNews = function(req, res){
    console.log('Request language:', req.headers.lang);
    console.log('Request headers:', req.headers);
    console.log('Query Params: ', req.query);

    const lang = req.headers.lang;

    if (!lang) {
        lang = 'ru';
    }

    const filteredNews = news.filter(
        (oneNews) => oneNews.lang === req.headers.lang,
    );
    res.status(200).json(filteredNews);
}

exports.deleteNews = function(req, res) {

    console.log('ID Params:', req.params);
    console.log('NewsId value:', req.params.newsId);


if (!existingNews) {
    return res.status(400).json('Вы удаляете не существующую новость!')
}

news = news.filter(oneNews => oneNews.id !== req.params.newsId)

    res.status(201).json('Новость успешно удалена!');
}


exports.updateOneNews = function (req, res) {
    console.log(req.body);
    console.log(req.params.id);

    const existingNews = news.find((oneNews) => oneNews.id === req.params.id); 

    if (!existingNews) {
        return res.status(404).json('Такой новости нет');
    }

    const updatedNews = {
        ...existingNews,
        ...req.body,
    };

    news =  news.filter(n => n.id !== updatedNews.id);
    news.push(updatedNews);


    // console.log(updatedNews)
    res.status(201).json(`Новость обновлена: ${req.params.id}`);
}













