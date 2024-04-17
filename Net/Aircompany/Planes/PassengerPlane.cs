using System;

namespace Aircompany.Planes
{
    public class PassengerPlane : Plane
    {
        private readonly int _passengersCapacity;

        public PassengerPlane(string model, int maxSpeed, int maxFlightDistance, int maxLoadCapacity, int passengersCapacity)
            :base(model, maxSpeed, maxFlightDistance, maxLoadCapacity)
        {
            _passengersCapacity = passengersCapacity;
        }

        public override bool Equals(object obj)
        {
            if (!(obj is PassengerPlane plane))
            {
                return false;
            }

            return base.Equals(obj) && _passengersCapacity == plane._passengersCapacity;
        }

        public override int GetHashCode()
        {
            var hashCode = 751774561;
            hashCode = hashCode * -1521134295 + base.GetHashCode();
            hashCode = hashCode * -1521134295 + _passengersCapacity.GetHashCode();
            return hashCode;
        }

        public int GetPassengersCapacity()
        {
            return _passengersCapacity;
        }

        public override string ToString()
        {
            return $"{base.ToString()}, passengersCapacity={_passengersCapacity}}}";
        }        
    }
}
