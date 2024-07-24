/*

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}

*/





// src/app/page.tsx
'use client';
  // Importe le module React qui est essentiel pour créer des composants d'interface utilisateur dans Next.js.
import React from 'react';
  // Importe le composant TodoList depuis le chemin spécifié.

  //Ce composant est responsable de l'affichage de la liste des tâches.
import TodoList from '../presentation/components/TodoList';

  // Définition d'un composant React fonctionnel nommé "Home".
  //Ce composant représente la page d'accueil de l'application.
  // 'use client' indique que ce composant sera rendu côté client.

export default function Home()
{
  // Le composant retourne un élément "main" qui représente le contenu principal de la page.
  return (

    // <main> représente le contenu principal de la page.
    <main
        // className est utilisé pour appliquer des styles CSS avec Tailwind CSS.
        // 'container' : centre le contenu horizontalement avec une largeur maximale.
        // 'mx-auto' : centre horizontalement le conteneur en utilisant des marges automatiques à gauche et à droite.
        // 'mt-8' : ajoute une marge supérieure de 8 unités (généralement des rem).
        // 'px-4' : ajoute un padding horizontal de 4 unités.
        // 'h-full' : définit la hauteur à 100% de la hauteur de son parent.
        // 'flex' : active le modèle de flexbox pour cet élément.
        // 'flex-col' : définit la direction de l'axe principal du flexbox sur la colonne (éléments empilés verticalement).
        // 'justify-center' : aligne les éléments au centre de l'axe principal (verticalement dans ce cas).
        // 'bg-gradient-to-b' : applique un gradient linéaire du haut vers le bas.
        // 'from-[#132743]' : définit la couleur de départ du gradient.
        // 'to-[#23143C]' : définit la couleur de fin du gradient.
        // 'rounded-lg' : applique un arrondi des coins avec un rayon large.
      className="container mx-auto mt-8 px-4 h-full flex flex-col justify-center  bg-gradient-to-b from-[#132743] to-[#23143C] rounded-lg"
    >
      
      {/* Affiche un titre de niveau 1 (h1) pour la page. */}
      <h1
          // className est utilisé pour appliquer des styles CSS avec Tailwind CSS.
          // 'text-5xl' : définit la taille de la police à 5xl.
          // 'py-20' : ajoute un padding vertical de 20 unités.
          // 'font-bold' : applique un style de police gras.
          // 'text-center' : centre le texte horizontalement.
          // 'text-transparent' : rend le texte transparent.
          // 'bg-clip-text' : applique l'arrière-plan (gradient ici) au texte.
          // 'bg-gradient-to-r' : applique un gradient linéaire de la gauche vers la droite.
          // 'from-blue-500' : définit la couleur de départ du gradient.
          // 'to-purple-500' : définit la couleur de fin du gradient.
        className="text-5xl py-20 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
      >

        {/* Le texte du titre. */}
        Gestionnaire de tâches

      </h1>
      
      {/* Affiche le composant TodoList qui gère l'affichage de la liste des tâches. */}
      <TodoList />

    </main>
  );
}






/*

    ## Documentation Générale : Page d'Accueil du Gestionnaire de Tâches

    ### Objectif:
        Ce code source représente le composant principal de la page d'accueil d'une application de gestion de tâches ("Gestionnaire de tâches"). Il est responsable de l'affichage de l'interface utilisateur de base, y compris le titre et la zone où la liste des tâches sera rendue.

    ### Fonctionnement:

        1. **Importations:**
          - **React:** Importation de la bibliothèque React, essentielle pour la création d'interfaces utilisateur dans Next.js.
          - **TodoList:** Importation du composant `TodoList` depuis un autre fichier. Ce composant est responsable de la gestion et de l'affichage de la liste des tâches.

        2. **Composant `Home`:**
          - **`'use client'`:**  Indique que ce composant est un composant côté client, c'est-à-dire qu'il sera exécuté dans le navigateur de l'utilisateur.
          - **Fonction `Home()`:** Cette fonction représente le composant React. Elle retourne le code JSX qui sera rendu dans le navigateur.
            - **Élément `main`:** Représente le contenu principal de la page d'accueil. Des styles CSS sont appliqués pour le design et la mise en page.
              - **Titre `h1`:** Affiche le titre "Gestionnaire de tâches" avec des styles pour le rendre visuellement attrayant.
              - **Composant `TodoList`:** Affiche le composant `TodoList` importé précédemment, qui gérera l'affichage de la liste des tâches.

    ### Lacunes et Améliorations Possibles:

        - **Gestion des Tâches:**
            Le code actuel ne gère pas la logique de création, de modification ou de suppression de tâches. Cette logique devrait être implémentée dans le composant `TodoList` ou dans des composants enfants.
        
        - **Stockage des Données:**
            L'application a besoin d'un moyen de stocker les tâches de manière persistante (base de données, stockage local du navigateur, etc.).
        
        - **Fonctionnalités Supplémentaires:**
            Des fonctionnalités telles que le marquage des tâches comme terminées, la catégorisation des tâches, les dates limites, etc. pourraient être ajoutées.

    ### Pensées du Développeur (Jack-Josias):
        Le développeur avait probablement l'intention de créer une application de gestion de tâches simple et visuellement attrayante. Le code actuel sert de point de départ pour construire des fonctionnalités plus avancées autour de la gestion des tâches.


    ### Impact et Cas Pratiques:

        **Impact Positif:**

          - Point de départ simple pour une application de gestion de tâches.
          - Utilisation de Tailwind CSS pour un style facile et rapide.
          - Structure claire pour une maintenance et une extension futures.

        **Impact Négatif:**

          - Manque de fonctionnalités essentielles de gestion des tâches.
          - Pas de persistance des données.
          - Fonctionnalités limitées par rapport aux applications de gestion de tâches complètes.

        **Cas Pratiques:**

          - Liste de tâches personnelle simple.
          - Application de démonstration pour apprendre les concepts de base de Next.js.
          - Prototype d'une application de gestion de tâches plus complexe.


    ## Tutoriel et Clean Architecture:
        Ce code utilise le framework Next.js et suit des principes de Clean Architecture, bien que de manière simplifiée. 

    **Clean Architecture :**

      L'idée principale est de séparer le code en couches indépendantes :

      - **Domain:** Contient la logique métier de l'application, indépendante de tout framework ou technologie spécifique (entités comme `Todo`, cas d'utilisation comme `createTodo`, etc.).
      - **Application:** Fait le lien entre la couche Domain et la couche Presentation.
      - **Infrastructure:** Contient les détails d'implémentation, tels que l'accès aux bases de données ou aux API externes.
      - **Presentation:**  Concerne l'interface utilisateur et interagit avec l'utilisateur.

      Dans ce code, la séparation est visible à travers les dossiers :

      - **`presentation`:** Contient les composants d'interface utilisateur (TodoList, TodoItem...).
      - **`core`:**  Pourrait contenir les dossiers `domain`, `application`, et `usecases` pour une meilleure organisation de la logique métier.
      - **`infrastructure`:**  Pourrait contenir des dossiers comme `repositories` pour l'accès aux données.

    En résumé, ce code fournit une base pour une application de gestion de tâches. En appliquant les principes de Clean Architecture et en ajoutant des fonctionnalités, vous pouvez créer une application robuste, maintenable et évolutive. 

*/