---
title: Netezza.Database
---

# Netezza.Database


## Description

Importe des données depuis une base de données IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retourne une table des tables, des vues et des fonctions stockées Netezza à partir de la base de données du serveur Netezza <code>base de données</code> sur le serveur <code>serveur</code>. Le port peut éventuellement être spécifié avec le serveur, séparé par le signe deux-points. Vous pouvez spécifier des <code>options</code> sous forme de paramètres d'enregistrement facultatifs pour gérer les options suivantes : <ul>        <li><code>CreateNavigationProperties</code> : Valeur logique (true/false) qui définit s'il faut générer des propriétés de navigation sur les valeurs retournées (la valeur par défaut est true)</li>        <li><code>HierarchicalNavigation</code> : Valeur logique (true/false) qui définit s'il faut afficher les tables regroupées par leur nom de schéma (la valeur par défaut est false)</li>        <li><code>ConnectionTimeout</code> : Durée qui contrôle le délai d'attente avant d'abandonner une tentative de connexion au serveur. La valeur par défaut dépend du pilote.</li>        <li><code>CommandTimeout</code> : Durée qui contrôle le temps pendant lequel la requête côté serveur est autorisée à s'exécuter avant d'être annulée. La valeur par défaut dépend du pilote.</li><li><code>NormalizeDatabaseName</code> : Valeur logique (true/false) qui définit s'il faut normaliser le nom de base de données et le mettre en majuscules ou s'il faut l'interpréter littéralement (la valeur par défaut est true).</li></ul>Le paramètre d'enregistrement est spécifié sous la forme [option1 = valeur1, option2 = value2...].


## Examples

### Example #1 
Répertorie les tables dans un projet IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



