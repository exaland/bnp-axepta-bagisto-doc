# Gestion des commandes 
La gestion des commandes dans un Laravel Multi Vendor Marketplace aide les vendeurs et les administrateurs à suivre, gérer et exécuter facilement les commandes des clients. 

Depuis le moment où un acheteur passe une commande jusqu’à l’expédition et la livraison, tout est géré au même endroit. 

Il garantit un traitement fluide, des mises à jour rapides et une meilleure coordination entre les vendeurs et les acheteurs pour une expérience d'achat sans tracas. 

<ImagePopup src="/images/multi-vendor-marketplace/1homepage.png" alt="Homepage" /> 

### Commandes 
Allez dans le menu **"Commandes"** et cliquez dessus. 

<ImagePopup src="/images/multi-vendor-marketplace/dashboard-order.png" alt="Dashboard Order" /> 

La page de gestion des commandes s'ouvrira, où vous pourrez voir toutes les commandes des clients en un seul endroit. Vous pouvez également filtrer les commandes par date ou statut, suivre la progression et mettre à jour le statut de livraison. 

Cela vous aide à gérer les commandes rapidement et à satisfaire vos clients. 
<ImagePopup src="/images/multi-vendor-marketplace/order-page.png" alt="Order Page" /> 

En cliquant sur l'icône en forme de flèche, vous trouverez plus d'informations sur la commande, ainsi que les détails de la facture et de l'expédition. 

Après avoir cliqué sur l'icône en forme de flèche à côté d'une commande, la page d'affichage de la commande s'ouvrira. 
Ici, vous pouvez afficher les détails de la commande tels que le nom du produit, le prix, le statut, les informations de facturation et d'expédition, le mode de paiement et le montant total. 

Initialement, l'article commandé sera dans l'état « En attente ». Cela signifie que la commande a été reçue mais pas encore traitée ou expédiée. 

### Facture 
Le vendeur peut créer une facture. 

Cliquez sur le bouton **"Facture"** dans le coin supérieur droit. 

<ImagePopup src="/images/multi-vendor-marketplace/pending-status-invoice.png" alt="Pending Status Invoice" /> 

Une fenêtre contextuelle apparaîtra affichant les détails de la facture tels que le nom du produit, la quantité, le prix et le montant total. 

<ImagePopup src="/images/multi-vendor-marketplace/create-invoice.png" alt="Create Invoice" /> 

En cliquant sur le bouton "Créer une facture", la facture est générée automatiquement. 
Un message de réussite apparaîtra à l'écran et le statut de la commande passera de l'état En attente à l'état En cours de traitement, indiquant que la commande est maintenant en cours de préparation pour l'expédition. 

<ImagePopup src="/images/multi-vendor-marketplace/processing-state.png" alt="Processing State" /> 

Une fois la facture créée, vous pouvez la consulter sous l'onglet « Facture ». 

<ImagePopup src="/images/multi-vendor-marketplace/invoice.png" alt="Invoice" /> 

### Expédition 
Le vendeur peut créer une expédition. 

Cliquez sur le bouton **"Expédier"** dans le coin supérieur droit. 

<ImagePopup src="/images/multi-vendor-marketplace/Ship-button.png" alt="Ship Button" /> 

Une fenêtre contextuelle apparaîtra affichant les détails de l'expédition tels que le nom du produit, la quantité, la quantité commandée, la quantité expédiée. 

Pour créer l'envoi, procédez comme suit : 

1) Saisissez le titre du transporteur (par exemple, FedEx, DHL, etc.) 

2) Entrez l'ID de suivi fourni par le service d'expédition 

3) Sélectionnez la source du produit commandé dans la liste déroulante 

4) Cliquez sur le bouton **"Créer un envoi"** pour continuer 

<ImagePopup src="/images/multi-vendor-marketplace/create-ship.png" alt="Create Shipment" /> 

En cliquant sur le bouton **"Créer un envoi"**, l'envoi est généré automatiquement. 

Un message de réussite apparaîtra à l'écran et le statut de la commande passera de **En cours** à **Terminé**, indiquant que la commande a été expédiée et exécutée avec succès. 

<ImagePopup src="/images/multi-vendor-marketplace/complete.png" alt="Order Completed" /> 

Une fois l'envoi créé, vous pouvez le visualiser sous l'onglet « Envoi ». 
<ImagePopup src="/images/multi-vendor-marketplace/Shipment.png" alt="Shipment" /> 

### Annulé 
Le vendeur peut annuler la commande. 

**Remarque :** Le vendeur peut annuler la commande uniquement avant de créer la facture ou l'expédition. 

Une fois la facture ou l'expédition générée, la commande ne peut plus être annulée. 

Cliquez sur le bouton **"Annuler"** dans le coin supérieur droit 

<ImagePopup src="/images/multi-vendor-marketplace/cancel-button.png" alt="Cancel Button" /> 

Une fenêtre contextuelle apparaîtra demandant : « Êtes-vous sûr ? » 

Deux options vous seront proposées : 

**1)** Accepter de confirmer l'annulation 

**2)** Je n'accepte pas de maintenir la commande active. 

Choisissez en conséquence pour continuer. 

<ImagePopup src="/images/multi-vendor-marketplace/msg-popup.png" alt="Confirmation Popup" /> 

Un message de réussite apparaîtra à l'écran et le statut de la commande passera de **"En attente"** à **"Annulée"**, indiquant que la commande a été annulée avec succès et ne continuera pas. 

<ImagePopup src="/images/multi-vendor-marketplace/cancelled.png" alt="Order Cancelled" />
