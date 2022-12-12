package com.swmansion.reanimated.sharedElementTransition;

import android.view.View;
import com.swmansion.reanimated.layoutReanimation.Snapshot;

public class SharedElement {

  public View sourceView;
  public Snapshot sourceViewSnapshot;
  public View targetView;
  public Snapshot targetViewSnapshot;

  public SharedElement(
      View sourceView, Snapshot sourceViewSnapshot, View targetView, Snapshot targetViewSnapshot) {
    this.sourceView = sourceView;
    this.sourceViewSnapshot = sourceViewSnapshot;
    this.targetView = targetView;
    this.targetViewSnapshot = targetViewSnapshot;
  }
}