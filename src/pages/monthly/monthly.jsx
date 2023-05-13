import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./monthly.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Monthly = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
      navigate("/");
  };

  return (
    <div >
          
This rent agreement is made on this 1st May by Deep Saha. Hereinafter called the Lessor/Owner, Party of the first part
AND D.B.S Rental Service, through its proposed director user name name of the director called lessee/tenant, the party of the second part
That the expression of the term, Lessor/Owner, and the Lessee/Tenant shall mean and include their legal heir's successors, assigns, representatives, etc. Whereas the Lessor/Owner is the owner and in possession of property No: 101 and has agreed to let out the one office room, one toilet & bathroom set on said property, to the Lessee/Tenant and the Lessee/Tenant has agreed to take the same on rent of Rs. 23000/-per month.
Now This Rent Agreement Witness As Under:
That the Tenant/Lessee will have to pay Rs. ****/- as monthly rent, which does not include electricity and water charges.
That the Tenant/Lessee shall not lease the property to a subtenant under any circumstances without the consent of the owner/landlord.
That the Tenant/Lessee shall follow all the rules and regulations, by-laws set by the local authorities in respect of the leased property and will not get involved or do illegal activities on the leased property.
That this lease/agreement is granted for eleven 11 months starting from and this contract can be extended further with the mutual consent of both parties as per the current rental value in the market.
That the Lessee shall pay the water and electricity charges based on the consumption to the landlord/owner.
The Tenant/Lessee shall not be permitted to do construction on the rented premises. Besides, he/she could do the installation of temporary decorations, wooden partitions/cabins, air conditioners, etc. without seeking the permission of the landlord.
That the Tenant/Lessee is not allowed to make any alteration in the rented property without the written consent of the owner.
That the Tenant/Lessee will have to allow the landlord or his authorized agent to enter into rented premises for its inspection or general checking for any repair work if needed.
That the Tenant/Lessee shall keep the premises clean and shall not involve in any activity that causes problems to neighbors.
That the Tenant/Lessees shall himself/herself bear the cost of day-to-day minor repairs.
That the Lessee/Tenant shall not involve in illegal activities and will not keep any offensive, dangerous or explosive articles on the premises.
That the Tenant/Lessee shall pay one month's rent in advance to the landlord which would be further adjusted in the monthly rent.
That both the parties, the landlord and the tenant, have read and understood this agreement and have agreed to sign the same without any pressure from any side.
In WITNESS WHEREOF the lessor/owner and the tenant/lessee have hereunto subscribed their hand at email on this the  1st May first above mentioned in the presence of the following witnesses.
Witnesses:
D.B.S Rental Service.

        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
</div>
  );
};

export default Monthly;
