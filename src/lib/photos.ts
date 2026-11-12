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
  ["03-ie5390eb.jpg", "Players in purple jerseys and gold helmets stand along the sideline.", ""],
  ["36-i9966db5.jpg", "Jr Bees outside AT&T Stadium at the 2018 NFL Draft.", "NFL Draft, 2018"],
  ["06-i870d26c.jpg", "The Jr Bees pose for a team photo in purple jerseys and gold helmets.", "Team photo"],
  ["08-i5fa4d54.jpg", "Coach Brad and Jr Bees players in honeycomb jerseys at a night game in Houston.", "Night game"],
  ["11-i67d9681.jpg", "Coach Brad on a field with another coach.", ""],
  ["12-i1c3ce66.jpg", "The team lines up in gold jerseys for a photo on the field.", "Gold jerseys"],
  ["13-i94efbeb.jpg", "A player in purple and gold runs with the ball.", ""],
  ["14-if9ea9b2.jpg", "Players on the field during a game.", ""],
  ["15-i1edcf3e.jpg", "The sideline during a game.", ""],
  ["17-ic8465bf.jpg", "Players and coaches on the sideline.", ""],
  ["18-ibe54073.jpg", "A player in a gold helmet.", ""],
  ["19-ifbf0224.jpg", "Action on the field.", ""],
  ["22-i3f10188.jpg", "A coach with players.", ""],
  ["23-id372713.jpg", "Players in purple waiting on the sideline.", ""],
  ["24-i9f1aac8.jpg", "A group of players in gold helmets.", ""],
  ["25-i836be40.jpg", "Jr Bees and coaches at McNeese Cowboy Stadium at night.", "McNeese Stadium"],
  ["26-ia5dde76.jpg", "A play during the game.", ""],
  ["27-ibd07c4f.jpg", "Players lined up.", ""],
  ["28-ib3e9f37.jpg", "The team gathered on the field.", "After the whistle"],
  ["29-i9104952.jpg", "A player in a purple jersey.", ""],
  ["31-id3f8948.jpg", "A wide team photo on the field.", "The whole group"],
  ["35-ic0550fb.jpg", "Players and adults together indoors.", "Inside"],
  ["37-if0e06e1.jpg", "A wide shot of a game.", ""],
  ["38-i8e5811b.jpg", "Players spread across the field.", ""],
  ["39-if512c55.jpg", "The field during a game.", ""],
  ["40-i79f5e68.jpg", "A player up close in purple and gold.", ""],
  ["47-i656619a.jpg", "Jr Bees with professional players at Houston Texans training camp.", "Texans camp"],
  ["48-i021e383.jpg", "A moment from a game.", ""],
  ["50-i25161ad.jpg", "Players in purple.", ""],
  ["51-i068564f.jpg", "The team on the field.", ""],
  ["52-iac91983.jpg", "Another look at game day.", ""],
].map(([file, alt, caption]) => ({
  src: `/media/jimdo/${file}`,
  alt,
  caption,
}));

const floor: AlbumPhoto[] = [
  ["05-iaea8777.jpg", "Three Honeybees in purple tops and white skirts pose with their hands on their hips.", ""],
  ["07-ie88ee0f.jpg", "Honeybees in white and purple hold a formation on the gym floor.", ""],
  ["09-ife8558d.jpg", "A group of girls in matching purple pose for a photo.", ""],
  ["10-i13eb85c.jpg", "Honeybees with a trophy.", "With a trophy"],
  ["16-i46d146c.jpg", "Dancers in white tops and purple skirts perform on a wooden floor.", ""],
  ["20-i8c0ab69.jpg", "A large Honeybees group photo in purple.", ""],
  ["21-i2963f69.jpg", "Honeybees lined up in purple.", ""],
  ["32-idd72654.jpg", "A dancer performing.", ""],
  ["33-i4cdff28.jpg", "Dancers mid-routine.", ""],
  ["34-i2c0f22c.jpg", "A dancer in purple.", ""],
  ["04-i4de506d.jpg", "Honeybees on stage with Division Champion banners.", "MCDA Division Champion"],
  ["41-if692410.jpg", "Honeybees pose with a banner.", "With their banner"],
  ["49-i907790f.jpg", "A Honeybee in purple.", ""],
  ["53-ifc2159f.jpg", "Dancers posing.", ""],
  ["54-iee15645.jpg", "A small group of Honeybees.", ""],
  ["55-ia563dda.jpg", "Honeybees in purple.", ""],
  ["56-ie745ad9.jpg", "Honeybees posing together.", ""],
].map(([file, alt, caption]) => ({
  src: `/media/jimdo/${file}`,
  alt,
  caption,
}));

export const albums: Album[] = [
  { title: "Football", photos: field },
  { title: "Honeybees", photos: floor },
];

export const photoTeasers = [
  field[2],
  floor[0],
  field[3],
  floor[4],
  field[5],
  floor[5],
] as AlbumPhoto[];
