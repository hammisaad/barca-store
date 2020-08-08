const INITIAL_STATE = {
  sections: [
    {
      title: "",
      tag: "",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fcb-store.appspot.com/o/directory%2F1.jpg?alt=media&token=9fbc0745-b688-4e48-b521-1fe8193df461",
      id: 1,
      linkUrl: "kits",
    },
    {
      title: "EXCLUSIVES EDITIONS: ONLY AT BARÇA STORES",
      tag: "La Liga | Woman",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fcb-store.appspot.com/o/directory%2F2.jpg?alt=media&token=ba41bd67-717e-4235-822a-1a3eb6b155b3",
      id: 2,
      linkUrl: "exclusives",
    },
    {
      title: "NEW TRAINING COLLECTION",
      tag: "You also play with Barça’s new 20/21 Training Kit.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fcb-store.appspot.com/o/directory%2F3.jpg?alt=media&token=be32579c-6302-419a-b551-73157d1a1328",
      id: 3,
      linkUrl: "masks",
    },
    {
      title: "Gallina de piel",
      tag: "Pay homage to Cruyff, a player even more iconic than his phrases.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fcb-store.appspot.com/o/directory%2F4.jpg?alt=media&token=d9b63022-62c6-4bdc-91e7-2c0ed7e61ee3",
      size: "large",
      id: 4,
      linkUrl: "fashion",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE) => {
  return state;
};

export default directoryReducer;
