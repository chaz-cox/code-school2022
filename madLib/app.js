// Default Mad Lib component
Vue.component("pessimistic-mad-lib", {
    template: `
    <div id='story'>
        <b>{{ name }}</b> was born <b>{{ birthday }}</b> and is absolutely frightened at the idea of eating <b>{{ favoriteFood }}</b>.
        All good things come in <b>{{favoriteNumber}}</b>'s, right? Not according to <b>{{ name }}</b>. That's how many times <b>{{ name }}</b> has been
        able to buy <b>{{ favoriteShoppingItem }}</b> - clearly not enough! What's more, <b>{{ name }}</b> found out that
        <b>{{ favoriteMovie }}</b> has <b>{{ favoriteNumber }}</b> sequels, and they're all terrible! No wonder
        <b>{{ name }}</b> is one of the few remaining fans of the series. Considering all this, there are definitely better days ahead for <b>{{ name }}</b>.
    </div>
    `,
    props: {
        'name': String,
        'birthday': String,
        'favoriteFood': String,
        'favoriteNumber': Number,
        'favoriteMovie': String,
        'favoriteShoppingItem': String,
    }
});

// Implement your own mad lib component here:
Vue.component("my-mad-lib",{
    template:`
    <div id= 'story'>
        <b>{{ name }}</b> had a little <b>{{favoriteAnimal}}</b> a little, <b>{{favoiteAnimal}}<b> a little, {{favoriteAnimal}}
        whose <b>{{ bodyPart }}</b> was <b>{{ favoriteColor }}</b> as <b>{{ favoriteFood }}</b>
        Everywhere, where <b> {{ name }}</b> went <b>{{ name }} </b>went <b>{{ name }} </b>went
        Everywhere, where <b>{{ name }}</b> went, the <b>{{favoriteAnimal}}</b> sure did follow.
        The <b>{{favoriteAnimal}} </b>followed <b>{{name}} </b>to code-school one day and the TEACHER didnt like it so, <b>{{name}} </b>got a <b>{{number}} </b>out of a 100 in class!
    </div>
    `,
    props: {
        'name': String,
        'favoriteAnimal': String,
        'bodyPart': String,
        'favoriteColor': String,
        'favoriteFood': String,
        'number': Number,
    }
});

// Minimum Vue Instance
var app = new Vue({
    el: "#app",
});
