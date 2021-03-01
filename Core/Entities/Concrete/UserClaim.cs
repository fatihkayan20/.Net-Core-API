namespace Core.Entities.Concrete
{
    public class UserClaim:IEntity
    {
        public int UserClaimId { get; set; }
        public int ClaimId { get; set; }
        public int UserId { get; set; }
    }
}