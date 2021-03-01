using System.ComponentModel.DataAnnotations;

namespace Core.Entities.Concrete
{
    public class OperationClaim:IEntity
    {
        [Key]
        public int ClaimId { get; set; }
        public string Name { get; set; }
    }
}