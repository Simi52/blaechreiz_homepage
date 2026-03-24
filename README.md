# Wichtigste Funktionen

## Auftritte hinzufügen:
  1. Im 'Data' Ordner die 'events.json' Datei öffnen
  2. Folgendes hinzufügen (Das Feld `"image"` ist *optional*, nur falls Flyer oder ähnliches vorhanden)
```json     
{
    "name": "Example Event", 	
    "date": "2024-06-10", 	
    "time": "19:00", 	
    "location": "Blächreiz Stadium", 	
    "description": "Eifach e geile Gig", 	
    "image": "../images/Musik-brunch.png" 	
},
```
## Bilder hinzufügen
Unterordner erstellen im Ordner 'Gallery' und Bilder zum Ordner hinzufügen. Danach Biler umbenennen durch Python Skript mit Terminal-Command
```bash
python Renamping.py
```
Anschliesend Name des Ordners und Anzahl Bilder in Datei 'Data/galery.json' angeben:
```json
{
	"name": "Fasnacht 2026",
	"count": 60
},
```

# Git – Kurze Einführung
Repository herunterladen (clone)
```bash
git clone https://github.com/Simi52/blaechreiz_homepage.git
```
Änderungen holen (bevor du arbeitest, immer zuerst):
```bash
git pull origin main
```
Änderungen speichern (commit & push):
```bash
git add .
git commit -m "Beschreibung der Änderung"
git push origin main
```
Im Prinzip mehrere branches möglich, der 'main' branch ist automatisch nach einigen Minuten auch online unter blaechreiz.ch.

