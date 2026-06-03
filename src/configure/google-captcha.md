#GoogleCaptcha 

Google reCAPTCHA est une fonctionnalité de sécurité fournie par Google qui aide à protéger les sites Web contre le spam, les robots et les abus automatisés. 

Il fonctionne en vérifiant si une interaction est effectuée par un véritable utilisateur humain ou par un script automatisé. En ajoutant reCAPTCHA aux formulaires tels que la connexion, l'inscription, le contact et le paiement, les propriétaires de magasins peuvent empêcher les fausses soumissions, les attaques par force brute et les activités malveillantes. 

Pour ajouter, accédez au panneau d'administration et cliquez sur **Configurer >> Google Captcha** comme indiqué ci-dessous. 

 <ImagePopup src="/images/configure/configure-captcha.png" alt="Account Login" /> 

Dès que vous cliquez dessus, un bouton bascule Statut apparaîtra. Une fois que vous l'avez activé, vous verrez des options pour ajouter **ID de projet, clé API, clé de site** et **Seuil de score**. 

### Pour obtenir l'ID du projet Google Cloud : 

- Visitez [Google Cloud Console](https://console.cloud.google.com/) 
- Créez un nouveau projet ou sélectionnez-en un existant dans la liste déroulante des projets. 
- Notez votre ID de projet dans le tableau de bord du projet (pas le nom du projet). 

 <ImagePopup src="/images/configure/project-id.png" alt="Account Login" /> 

### Générer une clé API : 

- Dans Google Cloud Console, accédez à API et services → Identifiants. 

- Cliquez sur Créer des informations d'identification → Clé API. 

- Copiez maintenant la clé API générée. 

<ImagePopup src="/images/configure/api-1.png" alt="Account Login" /> 

### Créez une clé de site reCAPTCHA : 

- Accédez à Sécurité → reCAPTCHA dans Google Cloud Console. 
- Cliquez sur Créer une clé. 
- Entrez un nom d'affichage pour votre clé. 
- Sélectionnez Site Web comme type de plateforme. 
- Choisissez Basé sur le score (reCAPTCHA v3) comme type de reCAPTCHA. 
- Ajoutez votre (vos) domaine(s) dans la section Domaines (par exemple, exemple.com). 
- Cliquez sur Créer et copiez la clé de site générée. 

Vous devez maintenant ajouter tous les identifiants dans la configuration, définir le **Seuil de stock** sur 0,5 et enfin cliquer sur le bouton **Enregistrer la configuration**. 

 <ImagePopup src="/images/configure/site-key.png" alt="Account Login" /> 

Dès que la configuration est enregistrée, Google reCAPTCHA s'affichera à cinq endroits sur le site : 

- Connexion client 
- Inscription client 
- Page Contactez-nous 
- Mot de passe oublié 
- Commander Se connecter 

### Connexion client 

  <ImagePopup src="/images/configure/customer-signin.png" alt="Account Login" /> 

### Inscription client 

 <ImagePopup src="/images/configure/customer-signup.png" alt="Account Login" /> 

### Contactez-nous 

 <ImagePopup src="/images/configure/contact-us.png" alt="Account Login" /> 

### Récupérer le mot de passe 

 <ImagePopup src="/images/configure/forget-password.png" alt="Account Login" /> 

### Commander Se connecter 

 <ImagePopup src="/images/configure/checkout-signin.png" alt="Account Login" />