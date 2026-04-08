import './styles.scss';
import BuildingLottie from "@/components/lotties/building-lottie";

export default function ResolutionWarning() {

  return (
    <div className="resolution-warning">
      <div className="resolution-warning-content">
        <div className="resolution-warning-lottie-container">
          <BuildingLottie className="resolution-warning-lottie" />
        </div>
        <span>
          This website has not been optimized for mobile resolution yet.
        </span>
        <span>
          Please switch to a higher resolution device for the best experience.
        </span>
      </div>

    </div>
  )
}