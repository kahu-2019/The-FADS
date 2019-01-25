
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
        { id: 1, quotes: '" If you realized how powerful your thoughts are, you would never think a negative thought" - Peace Pilgram' },
        { id: 2, quotes: '" Never give up on what you really want to do. The person with big dreams is more powerful than the one with all the facts. " - H.Jackson Brown, Jr.' },
        { id: 3, quotes: '" The simple things can be really powerful." -Jon Taffer' },
        { id: 4, quotes: '" Negative attitude is nine times more powerful than a positive attitude." - Bikram Choudhury' },
        { id: 5, quotes: '"words are powerful; if you change your words, you can change your life." - Joyce Meyer' },
        { id: 6, quotes: '"Oops" - Jesus' },
        { id: 7, quotes: '" The less effort, the faster and more powerful you will be." - Bruce Lee' },
        { id: 8, quotes: " Believe in yourself 100%; Because if you don't, who will - Arpo" },
        { id: 9, quotes: '" ** Shruggs ** " - Harry' },
        { id: 10, quotes: '" Coughs politely..... hahahahah! " - Karl' },
        { id: 12, quotes: '" Live free bro " - Ranjit' },
        { id: 13, quotes: '" FREEEEEDDDOOM " -William Wallace (Mel Gibson)' },
        { id: 14, quotes: '" Any fool can write code that a computer can understand. Good programmers write code that humans can understand. " - Martin Fowler' },
        { id: 15, quotes: '" Heeyyyy Yooooo " - Kelly' },
        { id: 16, quotes: '" Mama, Just killed a man. " - Freddy Mercury' },
        {
          id: 17, quotes: " If you can't love yourself, how can you love anybody else? Can i get a amen. -Rupaul"
        },
        { id: 18, quotes: " I don't get cute, I get drop dead gorgeous.  - Karl" },
        { id: 19, quotes: '" I invented the word humble " - Arpo' }
      ]);
    });
};
