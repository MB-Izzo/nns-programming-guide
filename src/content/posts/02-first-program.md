---
title: "02 - Les bases de la programmation"
date: 2023-12-04
---

# Le programme par défaut

Votre fichier de base ```Program.cs``` devrait ressemblez à:
```csharp title="Program.cs" showLineNumbers
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
```

Vous pouvez supprimer cette ligne. On va écrire notre premier programme !

# Les variables 

Les variables permettent de stocker des informations dans votre code. Elles
peuvent avoir plusieurs types, parmi lesquels:

* int (un nombre entier)
* float (un nombre à virgule)
* string (une chaine de caractères)

Pour dire au programme que vous voulez stocker une variable, il faut indiquer
son type. Ainsi, le programme sait qu'il doit réserver de l'espace dans la RAM
pour stocker cette variable.  
**En effet, un programme c'est globalement cela: on
met des trucs (variables) dans la RAM, et on les manipule.**

Cette étape s'appelle "déclarer une variable". Voici comment faire:

```csharp title="Program.cs"
int hatPrice = 100;
```

Ainsi, on déclare que le prix de la casquette est 100.

Pour déclarer que la marque de cette casquette est Nike...

```csharp title="Program.cs"
string brand = "Nike";
```

Super ! Maintenant, notre programme stock des données... mais que faire avec ?

Et bien d'abord, on pourrait changer la valeur de cette variable après l'avoir 
déclarée. On appelle cela "assigner une valeur":

```csharp title="Program.cs"
hatPrice = 80;
```

Ici, pas besoin d'indiquer le type, c'est seulement à la déclaration de la variable
que l'on a besoin de faire cela !

# Les conditions

Imaginons que cette valeur de variable 80 n'ait pas été rentrée par nous même, 
mais que nous l'avons récupéré dans une base de donnée, et on voudrait que
notre programme agisse différemment selon son prix...

**On utiliserait les "conditions" pour cela !**

```csharp title="Program.cs" {6-11} showLineNumbers
int hatPrice = 100;
string brand = "Nike";

hatPrice = 80;

if (hatPrice > 50) {
    // Do something
} 
else {
    // Do something else
}
```

La syntaxe permet de tester toutes ces conditions:
```< <= > >= ==```
Inférieur, inférieur ou égal, etc...
Pour tester une égalité, on met deux fois le signe "==", sinon cela pourrait être
confondu avec l'assignation d'une variable !

# Écrire dans la console

Pour l'instant, on fait rien quelque soit le prix, mais cela serait cool de 
pouvoir afficher quelque chose selon le prix, grace a notre condition.
Pour cela, nous allons utiliser une **fonction** qui nous ait fournie par 
le C#: 
```csharp title="Program.cs"
Console.WriteLine("Hello");
```

Ne vous inquiétez pas si vous ne comprenez pas la syntaxe, on l'expliquera
quand on parlera des fonctions. Pour l'instant, retenez que c'est avec cette
syntaxe que l'on écrit quelque chose dans la console. On peut maintenant écrire
quelque chose de différent selon le prix de notre casquette !

```csharp title="Program.cs" {7, 10} showLineNumbers
int hatPrice = 100;
string brand = "Nike";

hatPrice = 80;

if (hatPrice > 50) {
    Console.WriteLine("Le prix est supérieur à 50");
} 
else {
    Console.WriteLine("Le prix est inférieur (ou égal) à 50");
}
```

Super ! On est désormais capable de faire quelque chose de différent selon l'état
de notre programme !
