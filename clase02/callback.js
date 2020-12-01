// callback
getUser("valeria", (user) => {
  let valeriaId = null;
  if (user && user.id) {
    valeriaId = user.id;
  }
  if (valeriaId) {
    getUserVideos(valeriaId, (videos) => {
      console.log(videos);
    });
  }
  throw new Error("No existe un usuario con ese nombre: ", "valeria");
});

// promises
function getUserVideosFrom(userName) {
  return getUser(userName)
    .then((user) => {
      let valeriaId = null
      if (user && user.id) {
        valeriaId = user.id
      }
      return valeriaId
    })
    .then((userId) => {
      if (userId) {
        return getUserVideos(userId)
      }
    })
    .catch((error) => {})
}

Promise.all(/* lista de promesas */).then((/* resoluciones de las promesas en el mismo orden*/) => {})

// async/await
async function getUserVideosFrom(userName) {
  try {
    const user = await getUser(userName)
    let valeriaId = null
    if (user && user.id) {
      valeriaId = user.id
    }
    const videos = await getUserVideos(user.id)
    return videos;
  } catch (error) {
    
  }
}