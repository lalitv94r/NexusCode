const setTheme = (theme) => {
    if (theme === 'dark'){
        document.getElementById('root').style.setProperty('--mainColor', '#15202B');
        document.getElementById('root').style.setProperty('--secondaryColor', '#192734');
        document.getElementById('root').style.setProperty('--borderColor', '#164D56');
        document.getElementById('root').style.setProperty('--mainText', '#fff');
        document.getElementById('root').style.setProperty('--secondaryText', '#eeeeee');
        document.getElementById('root').style.setProperty('--themeDotBorder', '#FFF');
        document.getElementById('root').style.setProperty('--previewBg', 'rgb(25, 39, 52, 0.8)');
        document.getElementById('root').style.setProperty('--previewShadow', '#111921');
        document.getElementById('root').style.setProperty('--navBarColor', '#164D56');
        document.getElementById('root').style.setProperty('--buttonColor', '#17a2b8');
        document.getElementById('root').style.setProperty('--brandColor', '#fff');
        document.getElementById('root').style.setProperty('--navBarLinkColor', '#c1c1c1');
        document.getElementById('root').style.setProperty('--cardBody', '#192734');
        document.getElementById('root').style.setProperty('--ndfFourOFour', "#111921")
        document.getElementById('root').style.setProperty('--ndfMsg', '#fff')
        document.getElementById('root').style.setProperty('--ndfBackgroud', '#111921')
    }else {
        document.getElementById('root').style.setProperty('--mainColor', '#eaeaea');
        document.getElementById('root').style.setProperty('--secondaryColor', '#fff');
        document.getElementById('root').style.setProperty('--borderColor', '#c1c1c1');
        document.getElementById('root').style.setProperty('--mainText', 'black');
        document.getElementById('root').style.setProperty('--secondaryText', '#4b5156');
        document.getElementById('root').style.setProperty('--themeDotBorder', '#24292e');
        document.getElementById('root').style.setProperty('--previewBg', 'rgb(251, 249, 243, 0.8)');
        document.getElementById('root').style.setProperty('--previewShadow', '#f0ead6');
        document.getElementById('root').style.setProperty('--navBarColor', '#164D56');
        document.getElementById('root').style.setProperty('--buttonColor', 'black');
        document.getElementById('root').style.setProperty('--brandColor', '#000');
        document.getElementById('root').style.setProperty('--navBarLinkColor', '#5A5A5A');
        document.getElementById('root').style.setProperty('--cardBody', '#FFF');
        document.getElementById('root').style.setProperty('--ndfFourOFour', "#fff")
        document.getElementById('root').style.setProperty('--ndfMsg', '#ff005a')
        document.getElementById('root').style.setProperty('--ndfBackgroud', '#eaeaea')
    }
    localStorage.setItem('theme', theme);
}

export {
    setTheme
}