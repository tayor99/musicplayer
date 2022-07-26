import { v4 as uuidv4 } from 'uuid';
import sounfile1 from '../musiclist/01-Wake-Me-Up.mp3';
import sounfile2 from '../musiclist/02 Sunflower (Spider-Man Into the Spider-Verse).mp3';
import sounfile3 from '../musiclist/02 You Make Me.mp3';
import sounfile4 from '../musiclist/03 Way Up.mp3';
import sounfile5 from '../musiclist/04 Lean On (feat. MØ & DJ Snake).mp3';
import sounfile6 from '../musiclist/07 Hide.mp3';
import sounfile7 from '../musiclist/08 Lay Me Down.mp3';
import sounfile8 from '../musiclist/Adele-Water Under The Bridge.mp3';
import sounfile9 from '../musiclist/Jorja-Smith-–-Be-Honest-feat.-Burna-Boy.mp3';
import sounfile10 from '../musiclist/Look At Me Now.mp3';
import sounfile11 from '../musiclist/Macklemore + Ryan Lewis - Downtown.mp3';
import sounfile12 from '../musiclist/Mikky Ekko Smile Lyrics.mp3';
function SongList() {
  return [
    {
      name: 'Wake me up',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/d/da/Avicii_Wake_Me_Up_Official_Single_Cover.png',
      audio: sounfile1,

      artist: 'Avicii',
      color: ['#76553C', '#0D0804'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Sunflower(Spider-man into the spiderverse)',
      cover:
        'https://cdn.vox-cdn.com/thumbor/WiRPNzpmB2yCmcKCtYD_lBPFa9Q=/0x0:1430x592/920x613/filters:focal(601x182:829x410):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61824931/Screen_Shot_2018_10_18_at_2.02.04_PM.0.png',
      audio: sounfile2,
      artist: 'Post malone, Swae lee',
      color: ['#DB7C90', '#E74155'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'You make me',
      cover:
        'https://img.discogs.com/VpoXQeoyULsKttXq15G9amikWSs=/fit-in/596x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6797841-1426888015-2718.jpeg.jpg',
      audio: sounfile3,
      artist: 'Avicii',
      color: ['#535B66', '#4F6773'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Way up',
      cover: 'https://i.ytimg.com/vi/uWibEEzMfr8/maxresdefault.jpg',
      audio: sounfile4,
      artist: 'Jaden Smith',
      color: ['#2B4B70', '#6B050B'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Lean on',
      cover: 'https://i1.sndcdn.com/artworks-000117561421-1sr0ib-t500x500.jpg',
      audio: sounfile5,
      color: ['#00AA80', '#83489E'],
      artist: 'Major Lazer',
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Hide',
      cover:
        'https://images.genius.com/7af227fc43a87a975b5e11d054a2fc0d.1000x1000x1.jpg',
      audio: sounfile6,
      color: ['#C2CBFB', '#F1F1F1'],
      artist: 'Juice Wrld, Seezyn',
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Lay Me Down',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/1/16/Avicii_-_Lay_Me_Down.jpg',
      audio: sounfile7,
      color: ['#8A3813', '#EDE1D8'],
      artist: 'Avicii',
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Water Under the Bridge',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Adele_-_Water_Under_the_Bridge_%28Official_Single_Cover%29.png/220px-Adele_-_Water_Under_the_Bridge_%28Official_Single_Cover%29.png',
      audio: sounfile8,
      color: '',
      artist: 'Adele',
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Be Honest',
      cover: 'https://i1.sndcdn.com/artworks-000585514535-7n1gfv-t500x500.jpg',
      color: ['#686868', '#141518'],
      audio: sounfile9,
      artist: 'Jorja Smith',
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Look At Me Now',
      cover:
        'https://m.media-amazon.com/images/M/MV5BMjdhMzVjY2UtOTRkNi00MDUzLThhYjctNjdhY2M0YjkwOWQ3XkEyXkFqcGdeQXVyNDU1NDIzMzY@._V1_.jpg',
      audio: sounfile10,
      color: ['#CCD2E1', '#000204'],
      artist: 'Chris brown',
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Downtown',
      cover:
        'https://images.rapgenius.com/d45c8dd2636572473bd46816fa982c3f.1000x523x1.jpg',
      audio: sounfile11,
      color: ['#997053', '#979582'],
      artist: 'Macklemore, RyanLewis',
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Smile',
      cover:
        'https://t2.genius.com/unsafe/252x252/https%3A%2F%2Fimages.genius.com%2Fa032f05cdf7ce7b5bedaa1499fa49e40.1000x1000x1.jpg',
      audio: sounfile12,
      color: ['#707070', '#F74564'],
      artist: 'Mikky Ekko',
      id: uuidv4(),
      active: false,
    },
  ];
}

export default SongList;
