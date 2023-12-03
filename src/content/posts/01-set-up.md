---
title: "01 - Installations"
date: 2023-12-03
---

# On commence toujours avec le plus ennuyant...

Mais au moins après, c'est passé ! Nous allons devoir:

* Installer un éditeur de code (ou IDE).
* Installer un compilateur C#.

#### Un éditeur de code ?
Pour faire simple, vous pourriez utiliser Notepad et ca suffirait. Mais un tas
de logiciel d'édition de code existent pour vous rendre la vie plus facile avec
certaines fonctionnalités.

#### Un compilateur, quesako ?
C'est le programme qui transforme votre code source
en quelque chose d'executable (un .exe dans notre cas). Comme le C# est un langage
développé par Microsoft, c'est eux qui vous fournissent ce compilateur.

# Installer le compilateur
Il faut d'abord installer le compilateur et les dépendances nécessaires pour développer en c#, 
[téléchargez et installez le .NET SDK 8.0 x64](https://dotnet.microsoft.com/en-us/download/dotnet/sdk-for-vs-code?utm_source=vs-code&utm_medium=referral&utm_campaign=sdk-install).
Ensuite, ouvrez un terminal (cmd dans la recherche windows) puis tapez
```
dotnet --version
```

Vous devriez voir quelque chose comme "8.0.100". Bravo, vous avez installé tout ce qu'il faut pour programmer en C#.

# Installer l'éditeur de code

L'éditeur de code qui je vous propose pour ce tutoriel est le plus connu, et aussi
assez léger: [VSCode](https://code.visualstudio.com/download), qui fera largement l'affaire.

Lancez VSCode puis dans l'onglet extension à gauche, tapez "C#" et **installez l'extension C# et C# Dev kit**.

# Créer un projet c# dans VS Code.

* Ouvrez la palette de commande de VSCode grâce à Ctrl+Shift+P et tapez ".NET".
* Trouvez et selectionnez .NET: New Project command.
* Après avoir selectionné la commande, vous devrez choisir un template. Choisissez **Console App**.
* Si vous pressez F5, vous devriez voir une console s'ouvrir qui compile votre programme et qui affiche "Hello world".

Félicitations, on va enfin pouvoir passer aux choses sérieuses.





