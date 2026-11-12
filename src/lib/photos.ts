export type AlbumPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type Album = {
  title: string;
  photos: AlbumPhoto[];
};

const field: AlbumPhoto[] = [
  ["03-ie5390eb.jpg", "Players in purple jerseys and gold helmets stand along the sideline.", "Sideline"],
  ["04-i4de506d.jpg", "Coaches and players in gold jerseys stand together on the field.", "Coaches and players"],
  ["06-i870d26c.jpg", "The Jr Bees pose for a team photo in purple jerseys and gold helmets.", "Team photo"],
  ["08-i5fa4d54.jpg", "Young players in purple sit on the grass during practice.", "Practice"],
  ["11-i67d9681.jpg", "A younger squad poses in purple and gold.", "Younger squad"],
  ["12-i1c3ce66.jpg", "The team lines up in gold jerseys for a photo on the field.", "Gold jerseys"],
  ["13-i94efbeb.jpg", "A player in purple and gold runs with the ball.", "Game"],
  ["14-if9ea9b2.jpg", "Players on the field during a game.", "Game"],
  ["15-i1edcf3e.jpg", "The sideline during a game.", "Game"],
  ["17-ic8465bf.jpg", "Players and coaches on the sideline.", "Sideline"],
  ["18-ibe54073.jpg", "A player in a gold helmet.", "Game"],
  ["19-ifbf0224.jpg", "Action on the field.", "Game"],
  ["22-i3f10188.jpg", "A coach with players.", "Sideline"],
  ["23-id372713.jpg", "Players in purple waiting on the sideline.", "Sideline"],
  ["24-i9f1aac8.jpg", "A group of players in gold helmets.", "The squad"],
  ["25-i836be40.jpg", "Players on the field.", "Game"],
  ["26-ia5dde76.jpg", "A play during the game.", "Game"],
  ["27-ibd07c4f.jpg", "Players lined up.", "Game"],
  ["28-ib3e9f37.jpg", "The team gathered on the field.", "After the whistle"],
  ["29-i9104952.jpg", "A player in a purple jersey.", "Game"],
  ["31-id3f8948.jpg", "A wide team photo on the field.", "The whole group"],
  ["35-ic0550fb.jpg", "Players and adults together indoors.", "Inside"],
  ["37-if0e06e1.jpg", "A wide shot of a game.", "Game"],
  ["38-i8e5811b.jpg", "Players spread across the field.", "Game"],
  ["39-if512c55.jpg", "The field during a game.", "Game"],
  ["40-i79f5e68.jpg", "A player up close in purple and gold.", "Game"],
  ["47-i656619a.jpg", "Players on the sideline.", "Sideline"],
  ["48-i021e383.jpg", "A moment from a game.", "Game"],
  ["50-i25161ad.jpg", "Players in purple.", "Game"],
  ["51-i068564f.jpg", "The team on the field.", "Game"],
  ["52-iac91983.jpg", "Another look at game day.", "Game"],
].map(([file, alt, caption]) => ({
  src: `/media/jimdo/${file}`,
  alt,
  caption,
}));

const floor: AlbumPhoto[] = [
  ["05-iaea8777.jpg", "Three Honey Bees in purple tops and white skirts pose with their hands on their hips.", "Honey Bees"],
  ["07-ie88ee0f.jpg", "Honey Bees in white and purple hold a formation on the gym floor.", "On the floor"],
  ["09-ife8558d.jpg", "A group of girls in matching purple pose for a photo.", "The squad"],
  ["10-i13eb85c.jpg", "Honey Bees with a trophy.", "With a trophy"],
  ["16-i46d146c.jpg", "Dancers in white tops and purple skirts perform on a wooden floor.", "Routine"],
  ["20-i8c0ab69.jpg", "A large Honey Bees group photo in purple.", "Group photo"],
  ["21-i2963f69.jpg", "Honey Bees lined up in purple.", "Group photo"],
  ["32-idd72654.jpg", "A dancer performing.", "Performance"],
  ["33-i4cdff28.jpg", "Dancers mid-routine.", "Performance"],
  ["34-i2c0f22c.jpg", "A dancer in purple.", "Performance"],
  ["36-i9966db5.jpg", "A trophy from a Honey Bees competition.", "Trophy"],
  ["41-if692410.jpg", "Honey Bees pose with a banner.", "With their banner"],
  ["49-i907790f.jpg", "A Honey Bee in purple.", "Honey Bee"],
  ["53-ifc2159f.jpg", "Dancers posing.", "Honey Bees"],
  ["54-iee15645.jpg", "A small group of Honey Bees.", "Honey Bees"],
  ["55-ia563dda.jpg", "Honey Bees in purple.", "Honey Bees"],
  ["56-ie745ad9.jpg", "Honey Bees posing together.", "Honey Bees"],
].map(([file, alt, caption]) => ({
  src: `/media/jimdo/${file}`,
  alt,
  caption,
}));

export const albums: Album[] = [
  { title: "Football", photos: field },
  { title: "Honey Bees", photos: floor },
];

export const photoTeasers = [
  field[2],
  floor[0],
  field[3],
  floor[4],
  field[5],
  floor[5],
] as AlbumPhoto[];
