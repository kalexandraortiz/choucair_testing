// FavoriteCharacters.js
import React from 'react';
import { Card, CardContent, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import img from './appbar.png'; 

function FavoriteCharacters() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Sort characters alphabetically by name
const sortedFavorites = favorites.sort((a, b) => a.name.localeCompare(b.name));

return (
    <div>
        <AppBar position="static" sx={{ backgroundColor: 'black'}}>
            <Toolbar>
                <img src={img} alt="Header" style={{ height: 70, marginBottom: 10, marginRight: 30 }} />
                <Typography variant="h6" style={{ color: 'white', marginTop: 10}}>Favorite Characters</Typography>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit" href="/favorites">Favorites</Button>
                </div>
            </Toolbar>
        </AppBar>

        {sortedFavorites.length > 0 ? (
            favorites.map(character => (
                <Link key={character.id} to={`/character/${character.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            
                    <Card style={{ width: 200, margin: 10 }}>
                    <div style={{ position: 'relative' }}>
                        <img src={character.image} alt={character.name} style={{ maxWidth: '100%', height: 'auto' }} />
                        <Typography variant="body1" sx={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '2px 5px', borderRadius: 2 }}>
                        {character.species}
                        </Typography>
                    </div>
        
                    <CardContent style={{ alignItems: 'center' }}>
                        <Typography variant="h6">{character.name}</Typography>
                    </CardContent>
        
                    </Card>
                </Link>
            ))
        ) : (
            <Typography variant="h6"sx={{ position: 'relative', top: 20, left: 20 }}>No favorite characters added yet.</Typography>
        )}
    </div>
  );
}

export default FavoriteCharacters;