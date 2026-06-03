# Configuration des taux de change 

ExalandStore Exchange Rates vous permet d'actualiser automatiquement les taux de change en utilisant des services API externes. 

Dans le panneau d'administration, vous pouvez saisir rapidement les informations d'identification de l'API, choisir votre fournisseur de services préféré et organiser un calendrier pour les mises à jour automatiques. 

Cela garantit que les taux de change de votre magasin sont corrects sans avoir besoin de le faire manuellement. 

Pour configurer les taux de change, accédez à : Configuration > Général > Taux de change, comme illustré dans l'image ci-dessous. 

  <ImagePopup src="/images/configure/exchange_rates_configurations.png" alt="Address" /> 

### Configurations des taux de change 

Vous trouverez ci-dessous les étapes détaillées des configurations des taux de change. 

**1) Paramètres généraux** 

Dans cette partie, vous pouvez choisir le service de taux de change par défaut qu'ExalandStore utilisera. 

Vous pouvez choisir entre l’API Exchange Rates et l’API Fixer, en fonction de ce que vous aimez et de ce dont vous avez besoin. 

**2) API du correcteur** 

Ici, vous devez saisir la clé API que vous avez obtenue de fixer.io. 

Fixer vous donne des informations sur les taux de change en temps réel et passés. Il propose également un forfait gratuit, mais vous ne pouvez effectuer qu'un nombre limité de requêtes API. 

**3) API des taux de change** 

Dans cette section, vous devez saisir votre clé API depuis Exchangerate-api.com. Ce service propose des taux de change en temps réel pour plus de 160 devises. 

Le forfait gratuit vous permet de faire jusqu'à 1 500 demandes chaque mois, ce qui convient à la plupart des petites et moyennes magasins. 

**4) Importation programmée** 

Vous pouvez activer les mises à jour programmées pour actualiser automatiquement les taux de change à des heures définies. 

Une fois que vous l'avez activé, vous pouvez choisir la fréquence de mise à jour : quotidienne, hebdomadaire (tous les lundis) ou mensuelle (le 1er jour du mois). 

Vous pouvez facilement l'ajouter à partir des paramètres comme indiqué ci-dessous. 

<ImagePopup src="/images/configure/schedule.png" alt="Address" /> 

Vous devez définir l'heure de début en utilisant le **format 24 heures**, comme ceci : 03h00. 

Pour garantir que les mises à jour planifiées fonctionnent correctement, vous devez exécuter le planificateur de tâches Laravel. 

Vous pouvez le démarrer en utilisant cette commande : 

**horaire des artisans php : travail** 

<ImagePopup src="/images/configure/terminial_cron.png" alt="Address" /> 

### Sauvegarde des variables d'environnement 

Si vous oubliez de mettre les clés API dans le panneau d'administration, ExalandStore récupérera automatiquement les clés API de votre fichier .env. 

Pour l'API Fixer, vous pouvez utiliser **FIXER_API_KEY**. 

Pour l'API Exchange Rates, vous pouvez utiliser **EXCHANGE_RATES_API_KEY**. 

**Exemple de configuration .env :** 

FIXER_API_KEY=votre_fixer_api_key_here 

EXCHANGE_RATES_API_KEY=votre_exchange_rates_api_key_here 

### Mise à jour manuelle 

Outre les mises à jour automatiques, vous pouvez également modifier les taux de change manuellement. 

Pour ce faire, accédez au panneau d'administration, puis cliquez sur **Paramètres > Taux de change** et appuyez sur le bouton **Mettre à jour les taux**. 

Alternativement, vous pouvez utiliser la commande dans la CLI : **php artisan Exchange-rate:update** 

### API des taux de change (exchangerate-api.com) : 

- Exemple de point de terminaison : **v6.exchangerate-api.com/v6/{API_KEY}/latest/{BASE}** 

- Récupère tous les taux de change en un seul appel API 

- Niveau gratuit : 1 500 requêtes/mois 

- Inscrivez-vous : [https://www.exchangerate-api.com](https://www.exchangerate-api.com) 

### Services pris en charge 

API de taux de change ExalandStore (exchangerate-api.com) 

Cet outil obtient tous les taux de change avec un seul appel API. Vous pouvez effectuer 1 500 demandes gratuites chaque mois. 

### API du correcteur (fixer.io) 

- Point de terminaison : http://data.fixer.io/api/{date} 

- Récupère les taux par paire de devises 

- Niveau gratuit : 100 requêtes/mois 

- Inscrivez-vous : [https://fixer.io](https://fixer.io)