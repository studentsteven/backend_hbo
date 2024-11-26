# Project HBO Backend
Backend van het HBO project. Dit is een simpele site, de frontend staat in een andere repo.

### Gebruikte tools


### Installatie
Clone eerst de repo, en voer daarna de volgende commando's uit om de dockerimage te runnen.

#### Stap 1:

``
docker build -t backend_hbo .
``

-t is de flag die voor backend_hbo staat. Je kunt het ook een andere naam geven, door backend_hbo aan te passen. Noem het zo makkelijk mogelijk, dit heb je later nodig om het te runnen. 

De eerste keer is sloom, maar nu moeten er nog packages worden geinstallerd. Hierna duurt het niet meer zo lang.

#### Stap 2:
Je hebt net de docker image geinstalleerd. Nu is het tijd om de docker-container te runnen, waardoor je uiteindelijk ook je site kan runnen.

``
docker run -d -p 3000:3000 --name backend_hbo_container backend_hbo
``

Het is een lang commando, maar het doet het volgende:
- -d zorgt ervoor dat de container in de achtergrond draait.
- -p 3000:3000 zorgt voor de port-forwarding. Zonder dit, kan je de website niet lokaal openen. 3000 is de poort die je op je pc kan openen(localhost:3000, maar mag ook bijv. 1234 zijn) en port 3000 is voor node, omdat node op port 3000 draait.
- --name backend_hbo_container is de naam die je geeft voor de container.
- backend_hbo is het image dat moet worden gebruikt. Dus voer de naam in die je net hebt aangemaakt voor het maken van de image.

#### Stap 3:
We zijn er bijna. Maar nog niet helemaal; maar wel heel dichtbij. Nu hoef je alleen nog maar de website te openen. Dit kan met het volgende url:

``
localhost:3000
``

Als je het een andere poort hebt gegeven, zet dan achter de ``:`` neer welke poort je hebt gebruikt.