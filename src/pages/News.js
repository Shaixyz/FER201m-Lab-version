import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MainNewsFeature from '../components/MainNewsFeature';
import FeaturedPost from '../components/FeaturedPost';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import IntroductionMarkdown from '../components/markdown/A.Introduction.md';
import BodyMarkdown from '../components/markdown/B.Body.md';
import ClosingMarkdown from '../components/markdown/C.Closing.md';

const mainFeaturedPost = {
  title: 'The Dark Knight Rises',
  description:
    "Eight years after the Joker's reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.",
  image: 'https://wallpaperaccess.com/full/288727.jpg',
};

const featuredPosts = [
  {
    title: 'The Hobbit',
    date: 'November 12',
    description:
      'The Hobbit is set in Middle-earth and follows home-loving Bilbo Baggins, the hobbit of the title, who joins the wizard Gandalf and thirteen dwarves that make up Thorin Oakenshield, on a quest to reclaim the dwarves home and treasure from the dragon Smaug.',
    image: 'https://wallpaperaccess.com/full/288753.jpg',
  },
  {
    title: 'Alice In Wonderland',
    date: 'February 25',
    description:
      'Alice is Adventures in Wonderland by Lewis Carroll is a story about Alice who falls down a rabbit hole and lands into a fantasy world that is full of weird, wonderful people and animals. It is classic children book that is also popular with adults.',
    image: 'https://wallpapers.com/images/hd/alice-in-wonderland-2010-film-photoshoot-rez0sccuv56tc9vy.jpg',
  },
  {
    title: 'Avatar: The Way Of Water',
    date: 'December 16',
    description:
      'Avatar is a science fiction retelling of the history of North and South America in the early colonial period. Avatar very pointedly made reference to the colonial period in the Americas, with all its conflict and bloodshed between the military aggressors from Europe and the indigenous peoples.',
    image: 'https://m.media-amazon.com/images/I/71Lvqoov42L.jpg',
  },
  {
    title: 'Aquaman',
    date: 'November 26',
    description:
      'A half-Atlantean, half-human who is reluctant to be king of the undersea nation of Atlantis. He is a member of the Justice League. He possesses superhuman strength, durability, and has the ability to manipulate hydrokinesis, the tides, communicate with sea creatures and swim at supersonic speeds.',
    image: 'https://m.media-amazon.com/images/I/91qc-4BkJbL._AC_UF894,1000_QL80_.jpg',
  },
];

const sidebar = {
  title: 'What is ReactFlix?',
  description:
    'ReactFlix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  archives: [
    { title: 'Action Movies', url: '#' },
    { title: 'Comedy Movies', url: '#' },
    { title: 'Sci-Fi Movies', url: '#' },
    { title: 'Thriller Movies', url: '#' },
    { title: 'Drama Movies', url: '#' },
    { title: 'Animated Movies', url: '#' },
    { title: 'Documentaries', url: '#' },
    { title: 'TV Shows', url: '#' },
    { title: 'Anime Series', url: '#' },
    { title: 'Classic Movies', url: '#' },
    { title: 'New Releases', url: '#' },
    { title: 'Recommended', url: '#' },
  ],
};

// Function to fetch markdown content
const fetchMarkdown = async (path) => {
  const response = await fetch(path);
  const content = await response.text();
  return content;
};

export default function News() {
  const [introduction, setIntroduction] = React.useState('');
  const [body, setBody] = React.useState('');
  const [closing, setClosing] = React.useState('');

  React.useEffect(() => {
    const fetchMarkdownContent = async () => {
      const introductionContent = await fetchMarkdown(IntroductionMarkdown);
      const bodyContent = await fetchMarkdown(BodyMarkdown);
      const closingContent = await fetchMarkdown(ClosingMarkdown);

      setIntroduction(introductionContent);
      setBody(bodyContent);
      setClosing(closingContent);
    };

    fetchMarkdownContent();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      <main>
        <MainNewsFeature post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main title={<Typography variant="h4" component="h2">Description</Typography>} posts={[introduction, body, closing]} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
          />
        </Grid>
      </main>
    </Container>
  );
}
