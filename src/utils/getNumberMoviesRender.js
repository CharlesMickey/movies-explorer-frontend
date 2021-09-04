function getNumberMoviesRender(width) {
  let numberOfMoviesToRender;
  let numberOfMoviesToAdd;

  if (width > 1281) {
    const numberOfMoviesToRenderBigWindow = 4 + (Math.floor((width - 1280) / 270));
    numberOfMoviesToRender = numberOfMoviesToRenderBigWindow * 3;
    numberOfMoviesToAdd = numberOfMoviesToRenderBigWindow;
  } else if (width > 1280) {
    numberOfMoviesToRender = 16;
    numberOfMoviesToAdd = 4;
  } else if (width > 990) {
    numberOfMoviesToRender = 12;
    numberOfMoviesToAdd = 3;
  } else if (width > 649) {
    numberOfMoviesToRender = 8;
    numberOfMoviesToAdd = 2;
  } else if (width < 650) {
    numberOfMoviesToRender = 5;
    numberOfMoviesToAdd = 5;
  }
  return { numberOfMoviesToRender, numberOfMoviesToAdd };
}

export default getNumberMoviesRender;
