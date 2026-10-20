
# IAI Courses

Dépôt personnel regroupant mes supports de cours, TD, TP et notes de la formation en **génie logiciel** à l'**IAI (Institut Africain d'Informatique)**, Lomé, Togo. Organisé par semestre puis par matière.

![Status](https://img.shields.io/badge/statut-en%20cours-blue)
![Semestres](https://img.shields.io/badge/semestres-S1%20%7C%20S2%20%7C%20S3-lightgrey)

## Sommaire

- [Structure du dépôt](#structure-du-dépôt)
- [Semestre 1](#semestre-1)
- [Semestre 2](#semestre-2)
- [Semestre 3](#semestre-3)
- [Utilisation](#utilisation)
- [Conventions](#conventions)
- [Fichiers exclus](#fichiers-exclus)
- [Avertissement sur les droits d'auteur](#avertissement-sur-les-droits-dauteur)
- [Auteur](#auteur)

## Structure du dépôt

```
.
├── README.md
├── s1/   # Semestre 1
├── s2/   # Semestre 2
└── s3/   # Semestre 3 (à venir)
```

Chaque semestre contient un dossier par matière. Les matières regroupent les supports officiels (PDF), les exercices et les productions personnelles (code, scripts SQL, notes).

## Semestre 1

| Dossier | Matière | Contenu |
|---|---|---|
| `s1/algo_langage_c` | Algorithmique et langage C | Cours d'algorithmique, langage C, initiation à Pascal, cahier d'exercices, révisions 2026 |
| `s1/ato` | ATO | Cours |
| `s1/bases_math` | Bases mathématiques | Mathématiques discrètes |
| `s1/electro_num` | Électronique numérique | Cours 2026, TD1, sujet d'examen IAI 2021-2022 |
| `s1/english_french` | Anglais / Français | Dossier réservé |
| `s1/ic3` | IC3 | Cours sur Internet |
| `s1/linux` | Linux | `gnu_linux` : support GNU/Linux. `lpic` : préparation **LPIC-1 (examen 101)**, cahier d'exercices LPI101, DevOps, sécurité, open source, notes |
| `s1/sujet` | Épreuves | Sujets d'épreuves (TC1) |

## Semestre 2

| Dossier | Matière | Contenu |
|---|---|---|
| `s2/bases_donnees/init_bd` | Initiation aux bases de données | Cours 2026 |
| `s2/bases_donnees/sql` | SQL | Cours, TD1/TD2, TP1 à TP3, pratique SQL, scripts `.sql` (dont `cooperative.sql`) et corrections dans `tp/` |
| `s2/concep_appli/poo` | Programmation orientée objet | Cours complet (Java), chapitres 2 à 5, exceptions, premiers pas en Java |
| `s2/concep_appli/programmation_web` | Programmation web | HTML5, CSS, JavaScript, liste des balises HTML5 |
| `s2/concep_appli/structure_donnees` | Structures de données | Cours et cahier d'exercices 2026, syllabus, Python (apprentissage, chaînes de caractères, `turtle`, `map` et `lambda`), scripts d'entraînement |
| `s2/eco_gestion/compta` | Comptabilité générale | Cours, TD, notes sur les charges des activités |
| `s2/eco_gestion/env_eco` | Environnement économique | Cours, exercices, notes |

## Semestre 3

Dossier réservé, contenu à venir.

## Utilisation

Cloner le dépôt :

```bash
git clone git@github.com:clarkhawk/iai-courses.git
cd iai-courses
```

Naviguer dans une matière, par exemple pour retrouver les scripts SQL du semestre 2 :

```bash
cd s2/bases_donnees/sql/tp
ls
```

Rechercher un mot dans les notes texte :

```bash
grep -ri "mot_cle" --include="*.txt" --include="*.md" .
```

Exécuter les scripts Python de structures de données (Python 3 requis) :

```bash
cd s2/concep_appli/structure_donnees
python3 rebootPy/one.py
```

Rejouer un script SQL (exemple avec SQLite) :

```bash
sqlite3 test.db < s2/bases_donnees/sql/cooperative.sql
```

## Conventions

- Arborescence : `sN/<matiere>/<sous_matiere>`, en minuscules avec underscores.
- Les PDF de cours gardent leur nom d'origine quand c'est un support officiel.
- Les productions personnelles (code, SQL, notes) sont versionnées avec des messages de commit explicites, du type `Ajout TP3 SQL` ou `Correction exercice pointeurs`.
- Git ne suit pas les dossiers vides : un fichier `.gitkeep` marque les dossiers à conserver.

## Fichiers exclus

Le `.gitignore` exclut les fichiers lourds ou sans intérêt pour le dépôt :

```
*.zip
*.mp4
*.exe
```

Ces fichiers ont également été retirés de l'historique avec [`git filter-repo`](https://github.com/newren/git-filter-repo), car GitHub rejette les fichiers de plus de 100 Mo ([limites](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github)).

## Avertissement sur les droits d'auteur

Les supports de cours appartiennent à leurs auteurs respectifs (enseignants de l'IAI, éditeurs, **LPI** pour les supports LPIC, etc.). Ils sont conservés ici à usage **strictement personnel et pédagogique**. Si vous êtes titulaire de droits sur un document et souhaitez son retrait, ouvrez une *issue* et il sera supprimé.

Le code et les notes rédigés par moi sont libres d'utilisation à des fins d'apprentissage.

## Auteur

GitHub : [clarkhawk](https://github.com/clarkhawk)
