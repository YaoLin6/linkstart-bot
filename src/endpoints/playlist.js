const { default: axios } = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const playlistsUrl = `${process.env.API_URL}/playlists`;

/** Get user by Discord id */
module.exports.postPlaylist = async function (user, name, url) {
    const newPlaylist = {
        name: name ? name : "Ma playlist",
        url: url
    };

    const discordUserId = user.id;
    const createdPlaylist = await axios.post(playlistsUrl, newPlaylist, { params: { discordUserId } })
        .then(response => {
            return response.data;
        })
        .catch(error => console.log(error));

    return createdPlaylist;
};

module.exports.deletePlaylist = async function (id) {
    await axios.delete(`${playlistsUrl}/${id}`)
        .catch(error => console.log(error));
};
