using System.Collections.Generic;
using System.Linq;
using Core.DataAccess.EntityFramework;
using Core.Entities.Concrete;
using DataAccess.Abstract;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfUserDal:EfEntityRepositoryBase<User,NorthwindContext>,IUserDal
    {
        public List<OperationClaim> GetClaims(User user)
        {
            using (var context = new NorthwindContext())
            {
                var result = from operationClaim in context.OperationClaims
                    join userClaim in context.UserClaims
                        on operationClaim.ClaimId equals userClaim.ClaimId
                    where userClaim.ClaimId == user.UserId
                    select new OperationClaim {ClaimId = operationClaim.ClaimId, Name = operationClaim.Name};
                return result.ToList();

            }
        }
    }
}