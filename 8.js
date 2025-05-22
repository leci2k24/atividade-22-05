// Função para buscar dados do Pokémon
async function buscarPokemon(nome) {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`);
        const dados = await resposta.json();

        // Atualiza os elementos HTML com os dados obtidos
        document.getElementById('peso').textContent = `${dados.weight / 10} kg`;
        document.getElementById('altura').textContent = `${dados.height / 10} m`;

        // Obtém as habilidades
        const habilidades = dados.abilities.map(hab => hab.ability.name).join(', ');
        document.getElementById('habilidades').textContent = habilidades;

        // Obtém as estatísticas
        const estatisticas = dados.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ');
        document.getElementById('estatisticas').textContent = estatisticas;

    } catch (erro) {
        console.error('Erro ao buscar dados do Pokémon:', erro);
        document.getElementById('erro').textContent = 'Não foi possível buscar os dados do Pokémon.';
    }
}