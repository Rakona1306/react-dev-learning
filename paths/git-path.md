Sí. Lo que quieres es que **todo el contenido esté escrito directamente como un documento Markdown**, no como una explicación normal en el chat.

Te dejo la estructura correcta para que puedas copiarla directamente a un archivo `.md`:

# 📘 Guía completa de comandos Git

> Guía práctica para aprender Git desde los comandos básicos hasta los comandos avanzados.
>
> Cada comando incluye:
> - Qué hace
> - Para qué sirve
> - Sintaxis
> - Ejemplos
> - Diferencias con otros comandos
> - Casos prácticos

---

# 📑 Índice

1. [Configuración](#1-️-configuración)
2. [Crear y obtener repositorios](#2--crear-y-obtener-repositorios)
3. [Estado del repositorio](#3--estado-del-repositorio)
4. [Staging y commits](#4--staging-y-commits)
5. [Historial](#5--historial)
6. [Diferencias](#6--diferencias)
7. [Ramas](#7--ramas)
8. [Merge](#8--merge)
9. [Repositorios remotos](#9--repositorios-remotos)
10. [Fetch, Pull y Push](#10--fetch-pull-y-push)
11. [Restore](#11--restore)
12. [Reset](#12--reset)
13. [Revert](#13--revert)
14. [Stash](#14--stash)
15. [Rebase](#15--rebase)
16. [Cherry-pick](#16--cherry-pick)
17. [Tags](#17--tags)
18. [Reflog](#18--reflog)
19. [Blame](#19--blame)
20. [Bisect](#20--bisect)
21. [Clean](#21--clean)
22. [Commit Amend](#22--commit-amend)
23. [Worktree](#23--worktree)
24. [Flujos prácticos](#24--flujos-prácticos)

---

# 1. ⚙️ Configuración

## `git config`

### ¿Qué hace?

Permite configurar diferentes opciones de Git.

Las configuraciones pueden ser:

- Globales
- Para un repositorio específico
- Del sistema

### Configurar nombre

```bash
git config --global user.name "Juan Carlos"
````

### Configurar correo

```bash
git config --global user.email "correo@example.com"
```

### Ver configuración

```bash
git config --list
```

### Consultar el nombre

```bash
git config user.name
```

### Consultar el correo

```bash
git config user.email
```

### Configuración solamente para el repositorio actual

Si no utilizas `--global`:

```bash
git config user.name "Juan Carlos"
git config user.email "correo@example.com"
```

Esta configuración solo afecta al repositorio actual.

### Ejemplo

```bash
git config --global user.name "Juan Carlos"
git config --global user.email "juan@example.com"

git config --list
```

---

# 2. 📁 Crear y obtener repositorios

## `git init`

### ¿Qué hace?

Convierte una carpeta existente en un repositorio Git.

### Sintaxis

```bash
git init
```

### Ejemplo

```bash
mkdir mi-proyecto
cd mi-proyecto

git init
```

Git crea:

```text
mi-proyecto/
└── .git/
```

La carpeta `.git` contiene la información interna del repositorio.

### ¿Cuándo usarlo?

Cuando tienes un proyecto local que todavía no utiliza Git.

---

## `git clone`

### ¿Qué hace?

Descarga un repositorio existente junto con su historial.

### Sintaxis

```bash
git clone <URL>
```

### Ejemplo

```bash
git clone https://github.com/usuario/proyecto.git
```

Puedes especificar el nombre de la carpeta:

```bash
git clone https://github.com/usuario/proyecto.git mi-proyecto
```

### Diferencia entre `init` y `clone`

```text
git init
    ↓
crea un repositorio nuevo

git clone
    ↓
descarga un repositorio existente
```

---

# 3. 🔎 Estado del repositorio

## `git status`

### ¿Qué hace?

Muestra el estado actual del repositorio.

```bash
git status
```

Por ejemplo:

```text
On branch main

Changes not staged for commit:
  modified: src/app.js

Untracked files:
  README.md
```

Esto permite saber:

* En qué rama estás.
* Qué archivos fueron modificados.
* Qué archivos están en staging.
* Qué archivos son nuevos.
* Qué archivos no están siendo rastreados.

### Ejemplo práctico

Modificas:

```text
src/app.js
```

Después:

```bash
git status
```

Git te informa que el archivo fue modificado.

---

# 4. 📦 Staging y commits

## `git add`

### ¿Qué hace?

Coloca cambios en el **staging area**.

```text
Working Directory
       ↓
    git add
       ↓
Staging Area
```

### Un archivo

```bash
git add README.md
```

### Varios archivos

```bash
git add README.md src/app.js
```

### Todos los cambios

```bash
git add .
```

### Ejemplo

```bash
git status

git add src/app.js

git status
```

Ahora `src/app.js` estará preparado para el próximo commit.

---

## `git commit`

### ¿Qué hace?

Guarda los cambios que están en staging dentro del historial.

### Sintaxis

```bash
git commit -m "mensaje"
```

### Ejemplo

```bash
git add .
git commit -m "feat: agregar formulario de login"
```

### Buen mensaje

```bash
git commit -m "fix: corregir validación del email"
```

### Mal mensaje

```bash
git commit -m "cambios"
```

### Flujo normal

```bash
git status
git add .
git commit -m "feat: agregar login"
```

---

# 5. 📜 Historial

## `git log`

### ¿Qué hace?

Muestra el historial de commits.

```bash
git log
```

### Historial resumido

```bash
git log --oneline
```

Ejemplo:

```text
a82f91c fix: corregir email
7d31abc feat: agregar login
2c91faa chore: configurar proyecto
```

### Historial visual

```bash
git log --oneline --graph --decorate --all
```

Puede mostrar:

```text
* a82f91c fix: corregir email
* 7d31abc feat: agregar login
|\
| * 91abc22 feat: agregar register
|/
* 2c91faa chore: configurar proyecto
```

---

## `git show`

### ¿Qué hace?

Muestra los detalles de un commit.

```bash
git show <commit>
```

Ejemplo:

```bash
git show a82f91c
```

También puedes utilizar:

```bash
git show HEAD
```

Para ver el último commit.

---

# 6. 🔍 Diferencias

## `git diff`

### ¿Qué hace?

Muestra cambios que todavía no están en staging.

```bash
git diff
```

Ejemplo:

```diff
-const name = "Juan"
+const name = "Carlos"
```

---

## `git diff --staged`

### ¿Qué hace?

Muestra los cambios que ya están en staging.

```bash
git add src/app.js

git diff --staged
```

### Diferencia

```text
git diff
    ↓
cambios todavía fuera del staging

git diff --staged
    ↓
cambios que ya están en staging
```

---

# 7. 🌿 Ramas

## `git branch`

### ¿Qué hace?

Permite administrar ramas.

Ver ramas:

```bash
git branch
```

Crear:

```bash
git branch feature/login
```

Eliminar:

```bash
git branch -d feature/login
```

Ver ramas locales y remotas:

```bash
git branch -a
```

---

## `git switch`

### Cambiar de rama

```bash
git switch main
```

### Crear y cambiar

```bash
git switch -c feature/login
```

Esto equivale conceptualmente a:

```bash
git branch feature/login
git switch feature/login
```

### Ejemplo

```bash
git switch main

git switch -c feature/login

git status
```

---

## `git checkout`

También permite cambiar de rama.

```bash
git checkout main
```

Crear y cambiar:

```bash
git checkout -b feature/login
```

Para trabajar específicamente con ramas, actualmente suele ser más claro:

```bash
git switch
```

---

# 8. 🔀 Merge

## `git merge`

### ¿Qué hace?

Integra una rama dentro de otra.

Supongamos:

```text
A---B---C main
     \
      D---E feature/login
```

Quieres incorporar `feature/login` a `main`.

```bash
git switch main
git merge feature/login
```

Resultado:

```text
A---B---C---D---E
```

Dependiendo del historial, Git puede crear un merge commit.

### Conflictos

Si Git encuentra cambios incompatibles:

```text
<<<<<<< HEAD
código de main
=======
código de feature
>>>>>>> feature/login
```

Debes decidir qué código conservar.

Después:

```bash
git add archivo.js
git commit
```

### Cancelar un merge

```bash
git merge --abort
```

---

# 9. 🌐 Repositorios remotos

## `git remote`

### Ver remotos

```bash
git remote -v
```

Resultado típico:

```text
origin  https://github.com/usuario/proyecto.git (fetch)
origin  https://github.com/usuario/proyecto.git (push)
```

### Agregar remote

```bash
git remote add origin https://github.com/usuario/proyecto.git
```

### Eliminar

```bash
git remote remove origin
```

### Cambiar URL

```bash
git remote set-url origin https://github.com/usuario/nuevo.git
```

---

# 10. 📥 Fetch, Pull y Push

## `git fetch`

### ¿Qué hace?

Descarga información del remoto sin integrar automáticamente esos cambios en tu rama.

```bash
git fetch origin
```

Después puedes consultar:

```bash
git log origin/main --oneline
```

### Concepto

```text
git fetch
    ↓
descarga información
    ↓
tú decides qué hacer
```

---

## `git pull`

### ¿Qué hace?

Trae cambios del remoto y los integra en tu rama actual.

```bash
git pull
```

También:

```bash
git pull origin main
```

Conceptualmente:

```text
git pull
   ↓
fetch
   +
integración
```

---

## `git push`

### ¿Qué hace?

Sube tus commits al repositorio remoto.

```bash
git push
```

Primera vez:

```bash
git push -u origin main
```

Para una rama:

```bash
git push -u origin feature/login
```

Después:

```bash
git push
```

---

# 11. ↩️ Restore

## `git restore`

Sirve principalmente para restaurar archivos y manejar cambios del staging.

### Descartar modificaciones

```bash
git restore archivo.js
```

⚠️ Esto puede eliminar cambios locales que todavía no hayas guardado en un commit.

### Sacar un archivo del staging

```bash
git restore --staged archivo.js
```

Esto quita el archivo del staging pero mantiene su modificación local.

### Ejemplo

```bash
git add app.js

git restore --staged app.js
```

Ahora:

```text
app.js
  ↓
ya no está en staging
  ↓
pero sus cambios siguen en tu carpeta
```

---

# 12. ⏪ Reset

## `git reset`

Puede mover `HEAD` hacia otro commit.

### `--soft`

```bash
git reset --soft HEAD~1
```

El commit desaparece del historial actual, pero los cambios permanecen preparados.

```text
commit
  ↓
reset --soft
  ↓
cambios en staging
```

### `--mixed`

```bash
git reset HEAD~1
```

Los cambios permanecen en los archivos, pero salen del staging.

```text
commit
  ↓
reset
  ↓
cambios en working directory
```

### `--hard`

```bash
git reset --hard HEAD~1
```

Puede eliminar cambios.

⚠️ Utilízalo únicamente cuando estés seguro.

### Resumen

| Comando        | Commit | Staging | Archivos |
| -------------- | ------ | ------- | -------- |
| `reset --soft` | ❌      | ✅       | ✅        |
| `reset`        | ❌      | ❌       | ✅        |
| `reset --hard` | ❌      | ❌       | ❌        |

---

# 13. ↩️ Revert

## `git revert`

### ¿Qué hace?

Crea un nuevo commit que invierte los cambios de otro commit.

```bash
git revert abc123
```

Supongamos:

```text
A---B---C
```

Reviertes `C`:

```text
A---B---C---D
```

`D` contiene la operación inversa de `C`.

### Diferencia

```text
git reset
    ↓
modifica/mueve el historial

git revert
    ↓
crea un nuevo commit
```

Cuando un commit ya fue publicado y otros desarrolladores lo tienen, normalmente `revert` es más apropiado que reescribir el historial.

---

# 14. 📦 Stash

## `git stash`

### ¿Qué hace?

Guarda temporalmente cambios que todavía no quieres convertir en commit.

Supongamos:

```text
feature/login
```

Estás trabajando y aparece una tarea urgente.

```bash
git stash
```

Ahora puedes:

```bash
git switch main
```

Resolver la tarea y posteriormente:

```bash
git switch feature/login
git stash pop
```

### Ver stashes

```bash
git stash list
```

Ejemplo:

```text
stash@{0}: WIP on feature/login
stash@{1}: WIP on feature/navbar
```

### Aplicar

```bash
git stash apply stash@{0}
```

### Aplicar y eliminar

```bash
git stash pop
```

### Eliminar

```bash
git stash drop stash@{0}
```

---

# 15. 🔄 Rebase

## `git rebase`

### ¿Qué hace?

Reaplica tus commits sobre otra base.

Antes:

```text
A---B---C main
     \
      D---E feature
```

Ejecutas:

```bash
git switch feature
git rebase main
```

Resultado conceptual:

```text
A---B---C---D'---E'
```

### Resolver conflictos

```bash
git status
```

Corriges el archivo:

```bash
git add archivo.js
git rebase --continue
```

### Cancelar

```bash
git rebase --abort
```

---

## `git rebase -i`

Permite limpiar el historial.

```bash
git rebase -i HEAD~3
```

Puedes encontrar:

```text
pick abc123 primer cambio
pick def456 segundo cambio
pick ghi789 tercer cambio
```

Opciones:

```text
pick
reword
edit
squash
fixup
drop
```

Por ejemplo:

```text
pick abc123 primer cambio
squash def456 segundo cambio
squash ghi789 tercer cambio
```

Los tres commits se pueden convertir en uno.

⚠️ No reescribas historial compartido sin entender las consecuencias.

---

# 16. 🍒 Cherry-pick

## `git cherry-pick`

### ¿Qué hace?

Aplica un commit específico sobre la rama actual.

```bash
git cherry-pick abc123
```

Ejemplo:

```text
main:

A---B

feature:

A---B---C---D
```

Quieres llevar solamente `C`:

```bash
git switch main
git cherry-pick C
```

Resultado:

```text
A---B---C'
```

Es muy útil para:

* Hotfix.
* Llevar un cambio específico.
* Recuperar una modificación concreta.
* Transportar un commit entre ramas.

---

# 17. 🏷️ Tags

## `git tag`

Sirve para marcar puntos importantes del historial.

### Crear tag

```bash
git tag v1.0.0
```

### Ver tags

```bash
git tag
```

### Tag anotado

```bash
git tag -a v1.0.0 -m "Release v1.0.0"
```

### Subir un tag

```bash
git push origin v1.0.0
```

### Subir todos

```bash
git push origin --tags
```

---

# 18. 🕵️ Reflog

## `git reflog`

Registra movimientos locales de referencias.

```bash
git reflog
```

Ejemplo:

```text
abc123 HEAD@{0}: reset: moving to HEAD~2
def456 HEAD@{1}: commit: add login
```

Si accidentalmente haces:

```bash
git reset --hard HEAD~2
```

puedes investigar el historial anterior:

```bash
git reflog
```

Después:

```bash
git show def456
```

Y, si confirmas que ese era el punto que quieres recuperar, puedes mover una rama hacia él.

---

# 19. 👤 Blame

## `git blame`

Muestra qué commit modificó cada línea.

```bash
git blame src/app.js
```

Ejemplo:

```text
abc123 Juan  10) const name = "Juan"
def456 Ana   11) return name
```

Puedes investigar el commit:

```bash
git show abc123
```

### ¿Para qué sirve?

Principalmente para:

* Investigar cuándo apareció una modificación.
* Encontrar el commit relacionado.
* Entender el contexto histórico de una línea.

---

# 20. 🐛 Bisect

## `git bisect`

Sirve para localizar el commit que introdujo un bug.

Iniciar:

```bash
git bisect start
```

Marcar el estado actual:

```bash
git bisect bad
```

Marcar un commit conocido como correcto:

```bash
git bisect good <commit>
```

Git seleccionará un commit intermedio.

Después de probar:

```bash
git bisect good
```

o:

```bash
git bisect bad
```

Cuando termine:

```bash
git bisect reset
```

### Ejemplo conceptual

Tienes:

```text
A---B---C---D---E---F---G
```

Sabes:

```text
A = funciona
G = tiene bug
```

Git puede ayudarte a buscar:

```text
A → D → F → E → ...
```

hasta encontrar el commit responsable.

---

# 21. 🧹 Clean

## `git clean`

Elimina archivos que Git no está rastreando.

Primero revisa:

```bash
git clean -n
```

Esto muestra qué eliminaría.

Después:

```bash
git clean -f
```

Para incluir directorios:

```bash
git clean -fd
```

⚠️ Puede eliminar archivos que nunca fueron guardados en Git.

---

# 22. ✏️ Commit Amend

## `git commit --amend`

Permite modificar el último commit.

Supongamos que hiciste:

```bash
git add app.js
git commit -m "feat: add login"
```

Pero olvidaste:

```text
login.test.js
```

Puedes hacer:

```bash
git add login.test.js
git commit --amend
```

También puedes cambiar el mensaje:

```bash
git commit --amend -m "feat: add login and tests"
```

⚠️ Evita hacer amend sobre commits que ya compartiste públicamente sin entender el impacto.

---

# 23. 🌳 Worktree

## `git worktree`

Permite tener varias ramas activas en diferentes carpetas.

```bash
git worktree add ../hotfix hotfix
```

Puedes tener:

```text
proyecto/
    → feature/login

hotfix/
    → hotfix
```

Ver:

```bash
git worktree list
```

Eliminar:

```bash
git worktree remove ../hotfix
```

Es útil cuando necesitas trabajar rápidamente en otra rama sin abandonar el estado actual.

---

# 24. 🔥 Flujos prácticos

## Crear un proyecto Git desde cero

```bash
mkdir proyecto
cd proyecto

git init

git add .
git commit -m "chore: initial commit"
```

---

## Subir un proyecto nuevo a GitHub

```bash
git init

git add .

git commit -m "chore: initial commit"

git branch -M main

git remote add origin <URL>

git push -u origin main
```

---

## Crear una funcionalidad

```bash
git switch main

git pull

git switch -c feature/login
```

Trabajas:

```bash
git status
git diff
```

Después:

```bash
git add .
git commit -m "feat: add login"
```

Subes:

```bash
git push -u origin feature/login
```

---

## Actualizar una feature con `main`

### Con merge

```bash
git switch feature/login
git fetch origin
git merge origin/main
```

### Con rebase

```bash
git switch feature/login
git fetch origin
git rebase origin/main
```

---

## Deshacer el último commit

### Mantener cambios preparados

```bash
git reset --soft HEAD~1
```

### Mantener cambios pero quitar staging

```bash
git reset HEAD~1
```

### Eliminar cambios

```bash
git reset --hard HEAD~1
```

---

## Deshacer un commit publicado

```bash
git revert <commit>
git push
```

---

## Guardar temporalmente cambios

```bash
git stash
git switch main
```

Después:

```bash
git switch feature/login
git stash pop
```

---

## Llevar un commit específico

```bash
git switch main
git cherry-pick <commit>
```

---

## Investigar un commit perdido

```bash
git reflog
```

Después:

```bash
git show <commit>
```

---

# 🧠 Tabla rápida

| Comando           | Función                               |
| ----------------- | ------------------------------------- |
| `git init`        | Crear repositorio                     |
| `git clone`       | Clonar repositorio                    |
| `git status`      | Ver estado                            |
| `git add`         | Preparar cambios                      |
| `git commit`      | Crear commit                          |
| `git log`         | Ver historial                         |
| `git show`        | Ver un commit                         |
| `git diff`        | Ver diferencias                       |
| `git branch`      | Administrar ramas                     |
| `git switch`      | Cambiar de rama                       |
| `git merge`       | Integrar ramas                        |
| `git remote`      | Administrar remotos                   |
| `git fetch`       | Descargar información remota          |
| `git pull`        | Descargar e integrar                  |
| `git push`        | Subir commits                         |
| `git restore`     | Restaurar cambios                     |
| `git reset`       | Mover HEAD/reajustar estado           |
| `git revert`      | Crear commit inverso                  |
| `git stash`       | Guardar cambios temporalmente         |
| `git rebase`      | Reaplicar commits                     |
| `git cherry-pick` | Aplicar un commit específico          |
| `git tag`         | Marcar versiones                      |
| `git reflog`      | Recuperar referencias/movimientos     |
| `git blame`       | Investigar líneas                     |
| `git bisect`      | Encontrar un commit problemático      |
| `git clean`       | Eliminar archivos no rastreados       |
| `git worktree`    | Trabajar con varias ramas en carpetas |

---

# 🏆 Ejercicio general

Crea un repositorio y practica este flujo completo:

```text
1. init
2. add
3. commit
4. branch
5. switch
6. commit
7. merge
8. remote
9. push
10. fetch
11. pull
12. stash
13. rebase
14. cherry-pick
15. revert
16. tag
17. reflog
18. bisect
```

Tu objetivo no es memorizar los comandos.

Debes poder responder:

```text
¿Qué problema quiero resolver?
              ↓
¿Qué estado tiene mi repositorio?
              ↓
¿Qué comando corresponde?
              ↓
¿Qué efecto tendrá?
              ↓
¿Cómo verifico el resultado?
```

---

# 📝 Notas

* [ ] Comandos que necesito practicar:
* [ ] Comandos que todavía confundo:
* [ ] Errores encontrados:
* [ ] Comandos avanzados pendientes:
* [ ] Ejercicios pendientes:
